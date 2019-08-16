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
		<a href="{$filePath.resumePdfPath}" target="_blank">
			<i class="fa fa-file-pdf-o"></i>
		</a>
		<a href="{$filePath.resumeDocPath}" target="_blank">
			<i class="fa fa-file-word-o"></i>
		</a>
	</div>

<div class="about">
<p>
	My official name is Juanjuan Zhao. In workplace, people also call me Jennifer which is my English name.
</p>
<p>
	I am an {$selfIntroText}
</p>
<p>
	I basically spent 10 years in China working in translation industry, out of which 7 years were technology focused, 
	including 3 years as a web development manager and 4 years as a senior software engineer. All my efforts in the period 
	were to build an automated system to help innovate traditional translation workflow and enhance core competitiveness of 
	Cross Language.
</p>
<p>
	In 2016, I decided to pursue a master's degree in computer science at University of Texas at Dallas, and graduated in December 2018.
</p>
<p>
	Starting from August 2017, I resumed work as a web developer using modern Javascript frameworks, Node, React, Typescript, etc. 
	While being fond of the elegancy and possibilities of modern Javascript frameworks, I quickly grew into a senior software engineer 
	with extensive exposure to web technologies.
</p>
<p>
	Also I found myself well adapted to the work environment in US, in particular for communication in workplace, 
	time management, and team leading, based on my previous management experience in Cross Language.
</p>
<p>
	I've learned tremendous values by getting involved in agile development tools such as Jira; CICD tools and technologies 
	such as Heroku, Docker, Wercker, and Assembla; version management tools such as Git and SVN; Scaling tools and platforms 
	such AWS autoscaling, GCP, and Kubernetes. Also I highly appreciate modern Javascript libraries which make possible 
	efficient development and clean code: React, ESLint, Webpack, Babel, Styled Components, React Hooks, ES6, etc.
</p>
<p>
	I’m currently open for permanent positions (no contract) in {$contactInfo.futureLocation} as a senior software engineer, 
	senior full-stack engineer, or technical lead. My current location is {$contactInfo.location}.
</p>
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
