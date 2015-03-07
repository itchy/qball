!include MUI2.nsh
!include FileFunc.nsh


# Define some vars
!define MUI_PUBLISHER "Weave"
!define MUI_PUBLISHER_WEBSITE "getweave.com"
!define MUI_PRODUCT "Weave"
!define MUI_PRODUCT_EX "Weave Client"
!define MUI_ICON "@@assets/app.ico"
!define MUI_WELCOMEFINISHPAGE_BITMAP "@@assets/bg.bmp"
!define MUI_UNWELCOMEFINISHPAGE_BITMAP "${MUI_WELCOMEFINISHPAGE_BITMAP}"
!define MUI_UNICON "${MUI_ICON}"
!define REG_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${MUI_PRODUCT_EX}"
!define GUID "{330ed78b-1b84-4a2d-87a6-34970c9baab7}"

!define ASSET_FILE_DIR "$APPDATA\Weave\Client"
!define CLEAN_PARENT_ASSET "$APPDATA\Weave"
!define CLEAN_PARENT_INSTALL "$PROGRAMFILES\Weave"

!define SHORTCUT "$INSTDIR\wv.exe"
#!define SHORTCUT_PARAM "${ASSET_FILE_DIR}\assets.wv"
!define SHORTCUT_PARAM "${ASSET_FILE_DIR}\assets"

# If you use this, just be aware that it runs the app with elevated perms.
#!define MUI_FINISHPAGE_RUN "${SHORTCUT}"
#!define MUI_FINISHPAGE_RUN_TEXT "Launch ${MUI_PRODUCT}"
#!define MUI_FINISHPAGE_RUN_PARAMETERS "${SHORTCUT_PARAM}"

!define MUI_FINISHPAGE_RUN
!define MUI_FINISHPAGE_RUN_TEXT "Launch ${MUI_PRODUCT}"
!define MUI_FINISHPAGE_RUN_FUNCTION LaunchApplication

!define FILE_NAME "@@out/@@installerName-@@version@@channel.exe"
!define APP_EXE "wv.exe"


# Don't go to FINISH page automatically. Let user do so.
## MAINLY FOR DEBUGGING
#!define MUI_FINISHPAGE_NOAUTOCLOSE

Var PREV_VERSION

RequestExecutionLevel admin

OutFile "${FILE_NAME}"
Name "${MUI_PRODUCT_EX}"
BrandingText "${MUI_PUBLISHER} | ${MUI_PUBLISHER_WEBSITE}"

VIProductVersion "@@version.0"
VIAddVersionKey ProductName "${MUI_PRODUCT_EX}"
VIAddVersionKey CompanyName "${MUI_PUBLISHER}"
VIAddVersionKey LegalCopyright "(c) @@year ${MUI_PUBLISHER}"
VIAddVersionKey FileDescription "${MUI_PRODUCT_EX} Installer"
VIAddVersionKey FileVersion "@@version"
VIAddVersionKey ProductVersion "@@version"
VIAddVersionKey InternalName "${MUI_PRODUCT_EX}"
#VIAddVersionKey LegalTrademarks ""

# define installation directory
InstallDir "$PROGRAMFILES\Weave\Client"
SetCompressor /SOLID /FINAL lzma


#--------------------------------
# Modern UI System

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_WELCOME
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_UNPAGE_FINISH

#--------------------------------
# Language

!insertmacro MUI_LANGUAGE "English"


# start default section
Section "install"

  Call GetPreviousInstallGUID

  Push $R0
    StrCpy $R0 "$PREV_VERSION"
    Call UninstallMSI
  Pop $R0


  SetShellVarContext all

  # set the directory for the assets.wv file
  SetOutPath ${ASSET_FILE_DIR}

#  File "@@assetFile"
  File /r "@@assetFile"


#  SetShellVarContext current

  # set the installation directory as the destination for the following actions
  SetOutPath $INSTDIR

  # Add the files to the installer package
  File /r /x assets /x *.wv /x .DS_Store /x Thumbs.db "@@files"

  # Delete old icudt.dll, which isn't used anymore
  Delete "$INSTDIR\icudt.dll"

  # create the uninstaller
  WriteUninstaller "$INSTDIR\uninstall.exe"

#  SetShellVarContext all

  # Start Menu Dir
  CreateDirectory "$SMPROGRAMS\${MUI_PRODUCT}"

  # create shortcuts
  CreateShortCut "$SMPROGRAMS\${MUI_PRODUCT}\Uninstall.lnk" "$INSTDIR\uninstall.exe"
  CreateShortCut "$SMPROGRAMS\${MUI_PRODUCT}\Weave.lnk" "${SHORTCUT}" '"${SHORTCUT_PARAM}"'
  CreateShortCut "$INSTDIR\Open Weave.lnk" "${SHORTCUT}" '"${SHORTCUT_PARAM}"'

  # set add/remove prog reg values
  WriteRegStr HKLM "${REG_KEY}" "Publisher" "${MUI_PUBLISHER}"
  WriteRegStr HKLM "${REG_KEY}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKLM "${REG_KEY}" "DisplayIcon" "$INSTDIR\wv.exe,0"
  WriteRegStr HKLM "${REG_KEY}" "DisplayName" "${MUI_PRODUCT_EX}"
  WriteRegStr HKLM "${REG_KEY}" "DisplayVersion" "@@version"
  WriteRegStr HKLM "${REG_KEY}" "HelpLink" "http://support.weaveconnect.com/"
  WriteRegStr HKLM "${REG_KEY}" "HelpTelephone" "888-579-5668"
  WriteRegStr HKLM "${REG_KEY}" "UninstallString" "$\"$INSTDIR\uninstall.exe$\""
  WriteRegStr HKLM "${REG_KEY}" "QuietUninstallString" "$\"$INSTDIR\uninstall.exe$\" /S"
  WriteRegDWORD HKLM "${REG_KEY}" "NoModify" 0x00000001
  WriteRegDWORD HKLM "${REG_KEY}" "NoRepair" 0x00000001

  ${GetSize} "$INSTDIR" "/S=0K" $0 $1 $2
  IntFmt $0 "0x%08X" $0
  WriteRegDWORD HKLM "${REG_KEY}" "EstimatedSize" "$0"


  # Make the asset directory read write accessible by all users so the app can overwrite the assets file
  ClearErrors
  Push "OK"
  AccessControl::GrantOnFile "$APPDATA\Weave" "(S-1-1-0)" "GenericRead + GenericExecute + GenericWrite + Delete"
  AccessControl::GrantOnFile "$APPDATA\Weave" "(S-1-5-32-545)" "GenericRead + GenericExecute + GenericWrite + Delete"

  Pop $0
  ${If} $0 != "OK"
    MessageBox MB_OK "Error $0 granting access to $APPDATA\Weave"
    Pop $0   # Remove the "OK"
  ${EndIf}

#  AccessControl::GrantOnFile '"${CLEAN_PARENT_ASSET}"' "(BU)" "GenericRead + GenericExecute + GenericWrite + Delete"
#  AccessControl::GrantOnFile '"${CLEAN_PARENT_ASSET}"' "(S-1-5-32-545)" "GenericRead + GenericExecute + GenericWrite + Delete"

SectionEnd

# uninstaller section start
Section "uninstall"

  SetOutPath $TEMP

  #Delete Files
  RMDir /r "$INSTDIR\*.*"

  #Remove the installation directory
  RMDir "$INSTDIR"
  RMDir "${CLEAN_PARENT_INSTALL}"

  SetShellVarContext all

  # Remove the asset file
  RMDir /r "${ASSET_FILE_DIR}\*.*"

  #Remove the installation directory
  RMDir "${ASSET_FILE_DIR}"
  RMDir "${CLEAN_PARENT_ASSET}"

  # second, remove the link from the start menu
  Delete "$SMPROGRAMS\${MUI_PRODUCT}\Uninstall.lnk"
  Delete "$SMPROGRAMS\${MUI_PRODUCT}\Weave.lnk"
  RMDir "$SMPROGRAMS\${MUI_PRODUCT}"

  # remove add/remove progs reg values
  DeleteRegKey HKLM "${REG_KEY}"

# uninstaller section end
SectionEnd


#--------------------------------
# Functions

Function GetPreviousInstallGUID
  Push $0
  Push $1
  Push $2

  # Look for previous version, using MSI GUID from install
  StrCpy $0 0
  Loop:
  System::Call 'MSI::MsiEnumRelatedProducts(t "${GUID}",i0,i r0,t.r1)i.r2'

  ${If} $2 = 0
    StrCpy $PREV_VERSION $1
    IntOp $0 $0 + 1
    Goto Loop
  ${Endif}

  Pop $2
  Pop $1
  Pop $0
FunctionEnd


Function UninstallMSI
  # $R0 should contain the GUID of the application
  Push $R1
  ReadRegStr $R1 HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$R0" "UninstallString"
  StrCmp $R1 "" UninstallMSI_nomsi
#    MessageBox MB_YESNOCANCEL|MB_ICONQUESTION  "A previous version of ${MUI_PRODUCT} was found. It is recommended that you uninstall it first.$\n$\nDo you want to do that now?" IDNO UninstallMSI_nomsi IDYES UninstallMSI_yesmsi
#      Abort
#  UninstallMSI_yesmsi:
    ExecWait '"msiexec.exe" /x $R0 /qn REMOVE=ALL'
#    MessageBox MB_OK|MB_ICONINFORMATION "Click OK to continue upgrading your version of ${MUI_PRODUCT}"
  UninstallMSI_nomsi:
  Pop $R1
FunctionEnd

Function LaunchApplication
   SetOutPath $INSTDIR
   ShellExecAsUser::ShellExecAsUser "" `"${SHORTCUT}"` `"${SHORTCUT_PARAM}"`
FunctionEnd


#TODO: Use .onInit Method in order to check for existing installation.
#Function .onInit
#  nsProcess::_FindProcess "${APP_EXE}" $R0
#
#  ${If} $R0 == 0
#      MessageBox MB_OK|MB_ICONINFORMATION "${MUI_PUBLISHER} is running. Closing it down"
#      DetailPrint "${MUI_PUBLISHER} is running. Closing it down"
#      nsProcess::_CloseProcess "${APP_EXE}" $R0
#      DetailPrint "Waiting for ${MUI_PUBLISHER} to close"
#      Sleep 2000
#  ${Else}
#      MessageBox MB_OK|MB_ICONINFORMATION "${APP_EXE} was not found to be running"
#      DetailPrint "${APP_EXE} was not found to be running"
#  ${EndIf}
#
#  nsProcess::_Unload
#
#FunctionEnd
