<!DOCTYPE html>
<html>
{include file="common/head.tpl" nocache}
<body>
{include file="common/navigation.tpl" nocache}

<div class="mainbody">
{include file="common/nav_shade.tpl" nocache}

<div class="container-fluid bg-3 works">
	<div class="list">
    <div class="subtitle">Education</div>
	<p>2016.08 - 2018.12 <span>MS in Computer Science</span> The University of Texas at Dallas, Richardson, Texas</p>
	<p>2001.09 - 2005.07 <span>BS in Chemistry</span> Peking University, Beijing, China</p>
	</div>
    
	<div class="inlinelist courses">
	<div class="subtitle">Courses <em>GPA: 3.576</em></div>
	<div>
		<i class="fa fa-caret-right"></i>
		<p>Artificial Intelligence</p>
		<p {if $subject == "nlp"} class="active"{/if}><a href="{$rootpath}/education/nlp">Natural Language Processing</a></p> 
		<p {if $subject == "ir"} class="active"{/if}><a href="{$rootpath}/education/ir">Information Retrieval</a></p>
		<p {if $subject == "ml"} class="active"{/if}><a href="{$rootpath}/education/ml">Machine Learning</a></p>
		<p>Computer Vision</p>
	</div>
	<div>
		<i class="fa fa-caret-right"></i>
		<p {if $subject == "algorithm"} class="active"{/if}><a href="{$rootpath}/education/algorithm">Algorithm Analysis and Data Structures</a></p>
		<p>Database Design</p>
		<p {if $subject == "os"} class="active"{/if}><a href="{$rootpath}/education/os">Operating Systems Concepts</a></p>
		<p>Discrete Structure</p>
		<p>Computer Architecture</p>
	</div>
	<div>
		<i class="fa fa-caret-right"></i>
		<p>Cloud Computing</p>
		<p {if $subject == "web"} class="active"{/if}><a href="{$rootpath}/education/web">Web Programming Languages</a></p>
		<p {if $subject == "hci"} class="active"{/if}><a href="{$rootpath}/education/hci">Human Computer Interaction</a></p>
	</div>
	</div>

	<div class="row">
		<div class="col-md-12">
			<div class="panel-group">
			    <div class="panel panel-info">
			      <div class="panel-heading">
			        <h4 class="panel-title">
			          <a href="{$rootpath}/education">Course Projects</a>
			        </h4>
			      </div>
			      <div id="courseprj">
			        <div class="panel-body courseprj">
						<p class="java algorithm">2016.08 – 2016.12 <span>AVL Tree Operations: Insert and Inorder Traversal</span></p>
						<p class="algorithm java">2016.08 – 2016.12 <span>Design of a Hash Table for University students</span></p>
						<p class="algorithm java">2016.08 – 2016.12 <span>DFS and BFS Traversal of a Graph</span></p>
						<p class="algorithm java">2016.08 – 2016.12 <span>Finding Shortest Path in a Graph using Dijkstra’s Algorithm</span></p>
						<p class="os java unix">2017.02 – 2017.04 <span>Simulation of Multiple Processes and IPC</span></p>
						<p class="os java unix">2017.03 – 2017.04 <span>Simulation of Post Office with Threads and Semaphores</span></p>
						<p class="os java unix">2017.03 – 2017.04 <span>Implementing Network Communication Using Sockets</span></p>
						<p class="web bootstrap html css bootstrap">2017.05 – 2017.06 <span>A Personal Website </span><a href="http://www.utdallas.edu/~jxz161030" target="_blank"><i class="fa fa-link"></i></a></p>
						<p class="web bootstrap html css php mysql jquery">2017.06 – 2017.07 <span>Form Validation for User Login</span></p>
						<p class="web ajax php html css mysql">2017.06 – 2017.07 <span>Populating Historical Baby Names from External Data Source</span></p>
						<p class="web ajax php html css mysql bootstrap javascript jquery">2017.06 – 2017.07 <span>A Music Concert Ticket Ordering Website</span></p>
						<p class="web rest php html">2017.06 – 2017.07 <span>Implementing a RESTful web service using PHP</span></p>
						<p class="web angular node mean">2017.06 – 2017.07 <span>A Video Rental Web Application using MEAN Stack</span></p>
						<p class="hci android game">2018.02 – 2018.04 <span>Implementation of Barrel Race Game using Android</span></p>
						<p class="ir java">2017.03 – 2017.04 <span>Building Uncompressed/Compressed Stemmatized/Lemmatized Indexes for a Statistical Retrieval System</span></p>
						<p class="ir java">2017.03 – 2017.04 <span>Implementation of A Statistical Relevance Model for Retrieval System Based on Vector Relevance Model</span></p>
						<p class="ir java">2017.02 – 2017.03 <span>Query Expansion using Rocchio Algorithm and Local Clustering</span></p>
						<p class="ir java javascript">2017.02 – 2017.04 <span>A Web Search Engine of Computer Algorithm</span></p>
						<p class="nlp java corenlp">2017.02 – 2017.04 <span>A Coarse Logic Representation of News Articles</span></p>
						<p class="ml java classification">2018.02 – 2018.04 <span>Implementation of Naïve Bayes Tree, Logistic Regression, and Perceptron for Text Classification</span></p>
						<p class="ml java classification">2018.02 – 2018.04 <span>Implementation of Mixture of Tree Bayesian Networks using Expectation Maximization</span></p>
						<p class="ir java">2017.02 – 2017.04 <span>Inverted Index Building and Compression for Search Engine</span></p>
						<p class="ir java">2017.02 – 2017.04 <span>Tokenization of the Cranfield Collection</span></p>
						
						
						

			        </div>
			      </div>
			    </div>
			</div>
		</div>
	</div>
</div>
</div>
{include file="common/footer.tpl" nocache}
<script src="{$rootpath}/javascripts/courseprjs.js"></script>
</body>
</html>
