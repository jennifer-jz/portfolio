<!DOCTYPE html>
<html>
{include file="common/head.tpl" nocache}
<body>
{include file="common/navigation.tpl" nocache}

<div class="mainbody">
{include file="common/nav_shade.tpl" nocache}

<div class="container-fluid bg-3 works">
	<div class="row intro">
		<h4>About Me</h4>
		<a href="doc/resume.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i></a><a href="doc/resume.docx" target="_blank"><i class="fa fa-file-word-o"></i></a>
	</div>

<div class="about">
<p>
	I am an {$selfIntroText}
</p>
<p>
	I’m currently open for positions in the southern bay area, CA as a senior software engineer, 
	full-stack developer, or technical lead. 
</p>
<p>My current location is {$contactInfo.location}.</p>
<p>If you are impressed with my portfolio, please feel free to contact me.</p>
</div>

<div class="contactme">
	<p><a><i class="fa fa-envelope-square"></i></a><a href="mailto:{$contactInfo.email}?Subject=Work Info" target="_top">{$contactInfo.email}</a></p>
	<p><a><i class="fa fa-linkedin-square"></i></a><a href="{$contactInfo.linkedIn}" target="_blank">{$contactInfo.linkedIn}</a></p>
	<p><a><i class="fa fa-phone-square"></i></a>{$contactInfo.phone}</p>
</div>
</div>
</div>

{include file="common/footer.tpl" nocache}
</body>
</html>
