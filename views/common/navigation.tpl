<nav class="navbar navbar-lights">
  <div class="container">
<!--     <div class="navbar-header">
    </div> -->
    <div class="" id="myNavbar">
      <ul class="nav nav-tabs">
        <li{if $tpl=="home"} class="active"{/if}><a href="{$rootpath}/home">Home</a></li>
        <li{if $tpl=="experience"} class="active"{/if}><a title="Experience" href="{$rootpath}/experience">Experience</a></li>
        <li {if $tpl=="product"}class="active"{/if}><a title="Product Demo" href="{$rootpath}/product">Demo</a></li>
        <li{if $tpl=="capability"} class="active"{/if}><a title="Capability" href="{$rootpath}/capability">Capability</a></li>
<!--         <li{if $tpl=="solution"} class="active"{/if}><a title="Solution" href="{$rootpath}/solution">Tech Solution</a></li> -->
        <li{if $tpl=="nlp"} class="active"{/if}><a title="Natural Language Processing" href="{$rootpath}/nlp">NLP</a></li>
        <li{if $tpl=="education"} class="active"{/if}><a href="{$rootpath}/education">Education</a></li>
    		<!-- <li><a href="doc/resume.pdf" target="_blank">Resume</a></li> -->
    		<li{if $tpl=="aboutme"} class="active"{/if}><a title="About Me" href="{$rootpath}/aboutme">About Me</a></li>
      </ul> 
    </div>
  </div>
</nav>
