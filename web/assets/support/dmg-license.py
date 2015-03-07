




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>yoursway-create-dmg/support/dmg-license.py at master · andreyvit/yoursway-create-dmg</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="andreyvit/yoursway-create-dmg" name="twitter:title" /><meta content="yoursway-create-dmg - A shell script to build fancy DMGs. CONTRIBUTOR CHALLENGE: can someone please write a README.md for this thingie?" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/5364?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/5364?s=400" property="og:image" /><meta content="andreyvit/yoursway-create-dmg" property="og:title" /><meta content="https://github.com/andreyvit/yoursway-create-dmg" property="og:url" /><meta content="yoursway-create-dmg - A shell script to build fancy DMGs. CONTRIBUTOR CHALLENGE: can someone please write a README.md for this thingie?" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CDC5D75A:01FE:6DDD840:539F56B8" name="octolytics-dimension-request_id" /><meta content="1331818" name="octolytics-actor-id" /><meta content="tphalp" name="octolytics-actor-login" /><meta content="a9bad13132f86f4abc2d8ccdacfb29c12712ca10c1c9955882eb1b40d6619229" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="GN6IExXznP2CsqU7zkbmJA3xl3MiaAp+zdvIqNet616FywHyx/q1AVyi9Uu0271RnZlSKvZDqS32YbeOBrysqA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-acf76517f1144e1860f1c27a99edda849aae166f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-36b01605e373117248bc6b1662fbb278c9b54b42.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="6170086a316e599c0dbb8b0127cad792">

      
  <meta name="description" content="yoursway-create-dmg - A shell script to build fancy DMGs. CONTRIBUTOR CHALLENGE: can someone please write a README.md for this thingie?" />

  <meta content="5364" name="octolytics-dimension-user_id" /><meta content="andreyvit" name="octolytics-dimension-user_login" /><meta content="50746" name="octolytics-dimension-repository_id" /><meta content="andreyvit/yoursway-create-dmg" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="50746" name="octolytics-dimension-repository_network_root_id" /><meta content="andreyvit/yoursway-create-dmg" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/andreyvit/yoursway-create-dmg/commits/master.atom" rel="alternate" title="Recent Commits to yoursway-create-dmg:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="tphalp"
      data-repo="andreyvit/yoursway-create-dmg"
      data-branch="master"
      data-sha="34341f51482f55b0725db372f59bda0d5eafa8d0"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="andreyvit/yoursway-create-dmg" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/tphalp" class="name">
        <img alt="Tyson Phalp" class=" js-avatar" data-user="1331818" height="20" src="https://avatars1.githubusercontent.com/u/1331818?s=140" width="20" /> tphalp
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="andreyvit/yoursway-create-dmg">This repository</span>
    </li>
      <li>
        <a href="/andreyvit/yoursway-create-dmg/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="KrTtMlDbPElMb7LRsi2kHqbZLTZR03JjKXH4nVWvOl+KWTMFP+7ava3dqnS1l8uC5mJ/e9b9I9iIjoXyfvcOEg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="50746" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/andreyvit/yoursway-create-dmg/watchers">
        21
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container on">

    <form accept-charset="UTF-8" action="/andreyvit/yoursway-create-dmg/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ln4ihUI5rPY0hxp2i3JN1m+b8vHvNCmrLAZ5Tcs173FlISY1gMAxXBvmcIxmlwRJ5zSzP8lV5WE43bQ3Ri/QXQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar andreyvit/yoursway-create-dmg">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/andreyvit/yoursway-create-dmg/stargazers">
          163
        </a>
</form>
    <form accept-charset="UTF-8" action="/andreyvit/yoursway-create-dmg/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="yx5ejDtyP/nzURuA/Z7fyoxGrwLHDkMcv42lExB3HjRMGKlQl1/BbIW2DTCqzmSFO9KhcGB3zZ4NCJCvwZYm0w==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star andreyvit/yoursway-create-dmg">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/andreyvit/yoursway-create-dmg/stargazers">
          163
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/andreyvit/yoursway-create-dmg/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of andreyvit/yoursway-create-dmg to your account" aria-label="Fork your own copy of andreyvit/yoursway-create-dmg to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/andreyvit/yoursway-create-dmg/network" class="social-count">50</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/andreyvit" class="url fn" itemprop="url" rel="author"><span itemprop="title">andreyvit</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/andreyvit/yoursway-create-dmg" class="js-current-repository js-repo-home-link">yoursway-create-dmg</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/andreyvit/yoursway-create-dmg" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /andreyvit/yoursway-create-dmg">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/andreyvit/yoursway-create-dmg/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /andreyvit/yoursway-create-dmg/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>8</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/andreyvit/yoursway-create-dmg/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /andreyvit/yoursway-create-dmg/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/andreyvit/yoursway-create-dmg/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /andreyvit/yoursway-create-dmg/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/andreyvit/yoursway-create-dmg/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /andreyvit/yoursway-create-dmg/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/andreyvit/yoursway-create-dmg/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /andreyvit/yoursway-create-dmg/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/andreyvit/yoursway-create-dmg/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /andreyvit/yoursway-create-dmg/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/andreyvit/yoursway-create-dmg.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/andreyvit/yoursway-create-dmg.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:andreyvit/yoursway-create-dmg.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:andreyvit/yoursway-create-dmg.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/andreyvit/yoursway-create-dmg" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/andreyvit/yoursway-create-dmg" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/andreyvit/yoursway-create-dmg" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save andreyvit/yoursway-create-dmg to your computer and use it in GitHub Desktop." aria-label="Save andreyvit/yoursway-create-dmg to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/andreyvit/yoursway-create-dmg/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download andreyvit/yoursway-create-dmg as a zip file"
                   title="Download andreyvit/yoursway-create-dmg as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/andreyvit/yoursway-create-dmg/blob/1b924e51cb3835e8a6830046be660e83cff6ce6b/support/dmg-license.py" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d77664d7ebf07832c16a7066ddb6e972 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/andreyvit/yoursway-create-dmg/blob/master/support/dmg-license.py"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/andreyvit/yoursway-create-dmg/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="support/dmg-license.py"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andreyvit/yoursway-create-dmg" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">yoursway-create-dmg</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/andreyvit/yoursway-create-dmg/tree/master/support" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">support</span></a></span><span class="separator"> / </span><strong class="final-path">dmg-license.py</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="wesen" class="main-avatar js-avatar" data-user="128441" height="24" src="https://avatars2.githubusercontent.com/u/128441?s=140" width="24" />
      <span class="author"><a href="/wesen" rel="contributor">wesen</a></span>
      <time datetime="2013-01-03T18:54:29+01:00" is="relative-time">January 03, 2013</time>
      <div class="commit-title">
          <a href="/andreyvit/yoursway-create-dmg/commit/c532c59fce70b85e77ff07f355654f2ec990221e" class="message" data-pjax="true" title="add support for EULA resource fork">add support for EULA resource fork</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="wesen" class=" js-avatar" data-user="128441" height="24" src="https://avatars2.githubusercontent.com/u/128441?s=140" width="24" />
            <a href="/wesen">wesen</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>142 lines (127 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.3 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/andreyvit/yoursway-create-dmg?branch=master&amp;filepath=support%2Fdmg-license.py"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/andreyvit/yoursway-create-dmg/edit/master/support/dmg-license.py"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/andreyvit/yoursway-create-dmg/raw/master/support/dmg-license.py" class="button minibutton " id="raw-url">Raw</a>
            <a href="/andreyvit/yoursway-create-dmg/blame/master/support/dmg-license.py" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/andreyvit/yoursway-create-dmg/commits/master/support/dmg-license.py" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/andreyvit/yoursway-create-dmg/delete/master/support/dmg-license.py"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-python js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c">#! /usr/bin/env python</span></div><div class='line' id='LC2'><span class="sd">&quot;&quot;&quot;</span></div><div class='line' id='LC3'><span class="sd">This script adds a license file to a DMG. Requires Xcode and a plain ascii text</span></div><div class='line' id='LC4'><span class="sd">license file.</span></div><div class='line' id='LC5'><span class="sd">Obviously only runs on a Mac.</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="sd">Copyright (C) 2011 Jared Hobbs</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="sd">Permission is hereby granted, free of charge, to any person obtaining a copy</span></div><div class='line' id='LC10'><span class="sd">of this software and associated documentation files (the &quot;Software&quot;), to deal</span></div><div class='line' id='LC11'><span class="sd">in the Software without restriction, including without limitation the rights</span></div><div class='line' id='LC12'><span class="sd">to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></div><div class='line' id='LC13'><span class="sd">copies of the Software, and to permit persons to whom the Software is</span></div><div class='line' id='LC14'><span class="sd">furnished to do so, subject to the following conditions:</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="sd">The above copyright notice and this permission notice shall be included in</span></div><div class='line' id='LC17'><span class="sd">all copies or substantial portions of the Software.</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="sd">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></div><div class='line' id='LC20'><span class="sd">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></div><div class='line' id='LC21'><span class="sd">FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></div><div class='line' id='LC22'><span class="sd">AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></div><div class='line' id='LC23'><span class="sd">LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></div><div class='line' id='LC24'><span class="sd">OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN</span></div><div class='line' id='LC25'><span class="sd">THE SOFTWARE.</span></div><div class='line' id='LC26'><span class="sd">&quot;&quot;&quot;</span></div><div class='line' id='LC27'><span class="kn">import</span> <span class="nn">os</span></div><div class='line' id='LC28'><span class="kn">import</span> <span class="nn">sys</span></div><div class='line' id='LC29'><span class="kn">import</span> <span class="nn">tempfile</span></div><div class='line' id='LC30'><span class="kn">import</span> <span class="nn">optparse</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="k">class</span> <span class="nc">Path</span><span class="p">(</span><span class="nb">str</span><span class="p">):</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">def</span> <span class="nf">__enter__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="bp">self</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">def</span> <span class="nf">__exit__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="nb">type</span><span class="p">,</span> <span class="n">value</span><span class="p">,</span> <span class="n">traceback</span><span class="p">):</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">unlink</span><span class="p">(</span><span class="bp">self</span><span class="p">)</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="k">def</span> <span class="nf">mktemp</span><span class="p">(</span><span class="nb">dir</span><span class="o">=</span><span class="bp">None</span><span class="p">,</span> <span class="n">suffix</span><span class="o">=</span><span class="s">&#39;&#39;</span><span class="p">):</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="n">fd</span><span class="p">,</span> <span class="n">filename</span><span class="p">)</span> <span class="o">=</span> <span class="n">tempfile</span><span class="o">.</span><span class="n">mkstemp</span><span class="p">(</span><span class="nb">dir</span><span class="o">=</span><span class="nb">dir</span><span class="p">,</span> <span class="n">suffix</span><span class="o">=</span><span class="n">suffix</span><span class="p">)</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">close</span><span class="p">(</span><span class="n">fd</span><span class="p">)</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="n">Path</span><span class="p">(</span><span class="n">filename</span><span class="p">)</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'><span class="k">def</span> <span class="nf">main</span><span class="p">(</span><span class="n">options</span><span class="p">,</span> <span class="n">args</span><span class="p">):</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">dmgFile</span><span class="p">,</span> <span class="n">license</span> <span class="o">=</span> <span class="n">args</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">with</span> <span class="n">mktemp</span><span class="p">(</span><span class="s">&#39;.&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">tmpFile</span><span class="p">:</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">tmpFile</span><span class="p">,</span> <span class="s">&#39;w&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&quot;&quot;&quot;data &#39;LPic&#39; (5000) {</span></div><div class='line' id='LC52'><span class="s">    $&quot;0002 0011 0003 0001 0000 0000 0002 0000&quot;</span></div><div class='line' id='LC53'><span class="s">    $&quot;0000 000E 0006 0001 0005 0007 0000 0007&quot;</span></div><div class='line' id='LC54'><span class="s">    $&quot;0008 0000 0047 0009 0000 0034 000A 0001&quot;</span></div><div class='line' id='LC55'><span class="s">    $&quot;0035 000B 0001 0020 000C 0000 0011 000D&quot;</span></div><div class='line' id='LC56'><span class="s">    $&quot;0000 005B 0004 0000 0033 000F 0001 000C&quot;</span></div><div class='line' id='LC57'><span class="s">    $&quot;0010 0000 000B 000E 0000&quot;</span></div><div class='line' id='LC58'><span class="s">};</span><span class="se">\n\n</span><span class="s">&quot;&quot;&quot;</span><span class="p">)</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">license</span><span class="p">,</span> <span class="s">&#39;r&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">l</span><span class="p">:</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&#39;data </span><span class="se">\&#39;</span><span class="s">TEXT</span><span class="se">\&#39;</span><span class="s"> (5002, &quot;English&quot;) {</span><span class="se">\n</span><span class="s">&#39;</span><span class="p">)</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="n">line</span> <span class="ow">in</span> <span class="n">l</span><span class="p">:</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="nb">len</span><span class="p">(</span><span class="n">line</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1000</span><span class="p">:</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&#39;    &quot;&#39;</span> <span class="o">+</span> <span class="n">line</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s">&#39;&quot;&#39;</span><span class="p">,</span> <span class="s">&#39;</span><span class="se">\\</span><span class="s">&quot;&#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;</span><span class="se">\\</span><span class="s">n&quot;</span><span class="se">\n</span><span class="s">&#39;</span><span class="p">)</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span><span class="p">:</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="n">liner</span> <span class="ow">in</span> <span class="n">line</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s">&#39;.&#39;</span><span class="p">):</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&#39;    &quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">liner</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s">&#39;&quot;&#39;</span><span class="p">,</span> <span class="s">&#39;</span><span class="se">\\</span><span class="s">&quot;&#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;. </span><span class="se">\\</span><span class="s">n&quot;</span><span class="se">\n</span><span class="s">&#39;</span><span class="p">)</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&#39;};</span><span class="se">\n\n</span><span class="s">&#39;</span><span class="p">)</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">f</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="s">&quot;&quot;&quot;resource &#39;STR#&#39; (5002, &quot;English&quot;) {</span></div><div class='line' id='LC72'><span class="s">    {</span></div><div class='line' id='LC73'><span class="s">        &quot;English&quot;,</span></div><div class='line' id='LC74'><span class="s">        &quot;Agree&quot;,</span></div><div class='line' id='LC75'><span class="s">        &quot;Disagree&quot;,</span></div><div class='line' id='LC76'><span class="s">        &quot;Print&quot;,</span></div><div class='line' id='LC77'><span class="s">        &quot;Save...&quot;,</span></div><div class='line' id='LC78'><span class="s">        &quot;IMPORTANT - By clicking on the </span><span class="se">\\</span><span class="s">&quot;Agree</span><span class="se">\\</span><span class="s">&quot; button, you agree &quot;</span></div><div class='line' id='LC79'><span class="s">        &quot;to be bound by the terms of the License Agreement.&quot;,</span></div><div class='line' id='LC80'><span class="s">        &quot;Software License Agreement&quot;,</span></div><div class='line' id='LC81'><span class="s">        &quot;This text cannot be saved. This disk may be full or locked, or the &quot;</span></div><div class='line' id='LC82'><span class="s">        &quot;file may be locked.&quot;,</span></div><div class='line' id='LC83'><span class="s">        &quot;Unable to print. Make sure you have selected a printer.&quot;</span></div><div class='line' id='LC84'><span class="s">    }</span></div><div class='line' id='LC85'><span class="s">};&quot;&quot;&quot;</span><span class="p">)</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;/usr/bin/hdiutil unflatten -quiet &quot;</span><span class="si">%s</span><span class="s">&quot;&#39;</span> <span class="o">%</span> <span class="n">dmgFile</span><span class="p">)</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;</span><span class="si">%s</span><span class="s"> &quot;</span><span class="si">%s</span><span class="s">/&quot;*.r </span><span class="si">%s</span><span class="s"> -a -o &quot;</span><span class="si">%s</span><span class="s">&quot;&#39;</span> <span class="o">%</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">rez</span><span class="p">,</span> <span class="n">options</span><span class="o">.</span><span class="n">flat_carbon</span><span class="p">,</span> <span class="n">tmpFile</span><span class="p">,</span> <span class="n">dmgFile</span><span class="p">))</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;/usr/bin/hdiutil flatten -quiet &quot;</span><span class="si">%s</span><span class="s">&quot;&#39;</span> <span class="o">%</span> <span class="n">dmgFile</span><span class="p">)</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="n">options</span><span class="o">.</span><span class="n">compression</span> <span class="ow">is</span> <span class="ow">not</span> <span class="bp">None</span><span class="p">:</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;cp </span><span class="si">%s</span><span class="s"> </span><span class="si">%s</span><span class="s">.temp.dmg&#39;</span> <span class="o">%</span> <span class="p">(</span><span class="n">dmgFile</span><span class="p">,</span> <span class="n">dmgFile</span><span class="p">))</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">remove</span><span class="p">(</span><span class="n">dmgFile</span><span class="p">)</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="n">options</span><span class="o">.</span><span class="n">compression</span> <span class="o">==</span> <span class="s">&quot;bz2&quot;</span><span class="p">:</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;hdiutil convert </span><span class="si">%s</span><span class="s">.temp.dmg -format UDBZ -o </span><span class="si">%s</span><span class="s">&#39;</span> <span class="o">%</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="n">dmgFile</span><span class="p">,</span> <span class="n">dmgFile</span><span class="p">))</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">elif</span> <span class="n">options</span><span class="o">.</span><span class="n">compression</span> <span class="o">==</span> <span class="s">&quot;gz&quot;</span><span class="p">:</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">system</span><span class="p">(</span><span class="s">&#39;hdiutil convert </span><span class="si">%s</span><span class="s">.temp.dmg -format &#39;</span> <span class="o">%</span> <span class="n">dmgFile</span> <span class="o">+</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;UDZO -imagekey zlib-devel=9 -o </span><span class="si">%s</span><span class="s">&#39;</span> <span class="o">%</span> <span class="n">dmgFile</span><span class="p">)</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">os</span><span class="o">.</span><span class="n">remove</span><span class="p">(</span><span class="s">&#39;</span><span class="si">%s</span><span class="s">.temp.dmg&#39;</span> <span class="o">%</span> <span class="n">dmgFile</span><span class="p">)</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">print</span> <span class="s">&quot;Successfully added license to &#39;</span><span class="si">%s</span><span class="s">&#39;&quot;</span> <span class="o">%</span> <span class="n">dmgFile</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><span class="k">if</span> <span class="n">__name__</span> <span class="o">==</span> <span class="s">&#39;__main__&#39;</span><span class="p">:</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span> <span class="o">=</span> <span class="n">optparse</span><span class="o">.</span><span class="n">OptionParser</span><span class="p">()</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span><span class="o">.</span><span class="n">set_usage</span><span class="p">(</span><span class="s">&quot;&quot;&quot;%prog &lt;dmgFile&gt; &lt;licenseFile&gt; [OPTIONS]</span></div><div class='line' id='LC106'><span class="s">  This program adds a software license agreement to a DMG file.</span></div><div class='line' id='LC107'><span class="s">  It requires Xcode and a plain ascii text &lt;licenseFile&gt;.</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'><span class="s">  See --help for more details.&quot;&quot;&quot;</span><span class="p">)</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span><span class="o">.</span><span class="n">add_option</span><span class="p">(</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;--rez&#39;</span><span class="p">,</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;-r&#39;</span><span class="p">,</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">action</span><span class="o">=</span><span class="s">&#39;store&#39;</span><span class="p">,</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">default</span><span class="o">=</span><span class="s">&#39;/Applications/Xcode.app/Contents/Developer/Tools/Rez&#39;</span><span class="p">,</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">help</span><span class="o">=</span><span class="s">&#39;The path to the Rez tool. Defaults to </span><span class="si">%d</span><span class="s">efault&#39;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span><span class="o">.</span><span class="n">add_option</span><span class="p">(</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;--flat-carbon&#39;</span><span class="p">,</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;-f&#39;</span><span class="p">,</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">action</span><span class="o">=</span><span class="s">&#39;store&#39;</span><span class="p">,</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">default</span><span class="o">=</span><span class="s">&#39;/Applications/Xcode.app/Contents/Developer/Platforms&#39;</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;/MacOSX.platform/Developer/SDKs/MacOSX10.7.sdk&#39;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;/Developer/Headers/FlatCarbon&#39;</span><span class="p">,</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">help</span><span class="o">=</span><span class="s">&#39;The path to the FlatCarbon headers. Defaults to </span><span class="si">%d</span><span class="s">efault&#39;</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span><span class="o">.</span><span class="n">add_option</span><span class="p">(</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;--compression&#39;</span><span class="p">,</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;-c&#39;</span><span class="p">,</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">action</span><span class="o">=</span><span class="s">&#39;store&#39;</span><span class="p">,</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">choices</span><span class="o">=</span><span class="p">[</span><span class="s">&#39;bz2&#39;</span><span class="p">,</span> <span class="s">&#39;gz&#39;</span><span class="p">],</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">default</span><span class="o">=</span><span class="bp">None</span><span class="p">,</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">help</span><span class="o">=</span><span class="s">&#39;Optionally compress dmg using specified compression type. &#39;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">&#39;Choices are bz2 and gz.&#39;</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">options</span><span class="p">,</span> <span class="n">args</span> <span class="o">=</span> <span class="n">parser</span><span class="o">.</span><span class="n">parse_args</span><span class="p">()</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">cond</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">args</span><span class="p">)</span> <span class="o">!=</span> <span class="mi">2</span> <span class="ow">or</span> <span class="ow">not</span> <span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">exists</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">rez</span><span class="p">)</span> \</div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ow">or</span> <span class="ow">not</span> <span class="n">os</span><span class="o">.</span><span class="n">path</span><span class="o">.</span><span class="n">exists</span><span class="p">(</span><span class="n">options</span><span class="o">.</span><span class="n">flat_carbon</span><span class="p">)</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="n">cond</span><span class="p">:</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">parser</span><span class="o">.</span><span class="n">print_usage</span><span class="p">()</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">sys</span><span class="o">.</span><span class="n">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="n">main</span><span class="p">(</span><span class="n">options</span><span class="p">,</span> <span class="n">args</span><span class="p">)</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04568s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-66f40787248d40d8457b357437c30ec844b57b28.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-140aa9c34f570c06ca872670bcf98026f3e962db.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

