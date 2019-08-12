<!DOCTYPE html>
<html>
{include file="common/head.tpl" nocache}
<body>
{include file="common/navigation.tpl" nocache}

<div class="mainbody">
{include file="common/nav_shade.tpl" nocache}

<div class="container-fluid bg-3 works">

<div class="intro">
  <div class="name"><h4>Juanjuan Zhao</h4>
    <a href="doc/resume.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i></a><a href="doc/resume.docx" target="_blank"><i class="fa fa-file-word-o"></i></a><a href="{$contactInfo.linkedIn}" target="_blank"><i class="fa fa-linkedin-square" style="font-size:26px"></i></a>
  </div>
  <p>
    {$selfIntroText}
  </p>
</div>

  <div class="row">
    <div class="col-md-7">

        <div class="panel-group">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="capability">Technical Achievement</a>
              </h4>
            </div>
            <div id="Achievement">
              <div class="panel-body">
                <ul class="list-group">
                  <li class="list-group-item node">Convert a traditional website to Node.js site from scratch </li>
                  <li class="list-group-item node react es6">Create reusable React component excercising best practices</li>
                  <li class="list-group-item seo">Website optimization and Google performance score improvement </li>
                  <li class="list-group-item node mysql security">MySQL connection encryption with API development </li>
                  <li class="list-group-item node">Node modules customization </li>
                  <li class="list-group-item aspnet ir">Develop a Bilingual Dictionary <a href="http://www.scidict.org" title="a web dictionary" target="_blank">SCIdict.org</a> using IR technique </li>
                  <li class="list-group-item csharp mssql networking">Develop a large-scale ERP system for translation industry</li>
                  <li class="list-group-item csharp mssql networking">Develop a computer-assisted translation workbench</li>
                  <li class="list-group-item csharp office">Text extraction from and generation to MS Office document</li>
                  <li class="list-group-item csharp nlp">Text processing: sentence splitting, terminology identification and spell check </li>
                </ul>

              </div>
              <!-- <div class="panel-footer">Panel Footer</div> -->
            </div>
          </div>
      </div>

        <div class="panel-group">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="capability">Programming Languages & Tools</a>
              </h4>
            </div>
            <div>
              <div class="panel-body">
                <button type="button" class="btn btn-warning" data-toggle="tooltip" title="10,000+ lines">React + Typescript + PostgreSQL</button>
                <button type="button" class="btn btn-light" data-toggle="tooltip" title="10,000+ lines">Less</button>
                <button type="button" class="btn btn-primary" data-toggle="tooltip" title="5,000+ lines">Typeorm</button>
                <button type="button" class="btn btn-dark" data-toggle="tooltip" title="50,000+ lines">Node.js + Express.js + MySql</button>
                <button type="button" class="btn btn-primary" data-toggle="tooltip" title="300,000+ lines">Html 4/5 + CSS 2/3</button>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" title="10,000+ lines">Bootstrap</button>
                <button type="button" class="btn btn-success" data-toggle="tooltip" title="500,000+ lines">C# + SQL</button>
                <button type="button" class="btn btn-info" data-toggle="tooltip" title="80,000+ lines">Asp.Net Web</button>
                <button type="button" class="btn btn-warning" data-toggle="tooltip" title="20,000+ lines">Java</button>
                <button type="button" class="btn btn-danger" data-toggle="tooltip" title="5,000+ lines">MySQL + PhP</button>
                <button type="button" class="btn btn-dark" data-toggle="tooltip" title="10,000+ lines">Json</button>
                <button type="button" class="btn btn-light" data-toggle="tooltip" title="1,000+ lines">Angular JS</button>
                <button type="button" class="btn btn-info" data-toggle="tooltip" title="2,000+ lines">Android</button>
                <button type="button" class="btn btn-primary" data-toggle="tooltip" title="20,000+ lines">Javascript ES6</button>
                <button type="button" class="btn btn-danger" data-toggle="tooltip" title="20,000+ lines">jQuery / jQueryUI</button>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" title="5,000+ lines">Ajax + XML</button>
                <button type="button" class="btn btn-success" data-toggle="tooltip" title="2,000+ lines">Restful API</button>
                <button type="button" class="btn btn-info">Heroku</button>
                <button type="button" class="btn btn-light" data-toggle="tooltip" title="2,000+ lines">RabbitMQ</button>
                <button type="button" class="btn btn-warning">Docker</button>
                <button type="button" class="btn btn-dark">Gira</button>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" title="3,000+ lines">Stanford CoreNLP</button>
                
              </div>
              <!-- <div class="panel-footer">Panel Footer</div> -->
            </div>
          </div>
      </div>
    </div>
    <div class="col-md-5">
        <div class="panel-group">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="experience">Experience</a>
              </h4>
            </div>
            <div>
              <div class="panel-body">
                <button type="button" class="btn" data-toggle="tooltip" title="4 years">ERP System Development</button>
                <button type="button" class="btn" data-toggle="tooltip" title="4 years">MSSQL/MYSQL</button>
                <button type="button" class="btn btn-primary" data-toggle="tooltip" title="4 years">Responsive Website Building</button>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" title="3 years">SEO</button>
                <button type="button" class="btn btn-success" data-toggle="tooltip" title="1 year">MVC Pattern</button>
                <button type="button" class="btn btn-info" data-toggle="tooltip" title="3 years">IIS Configuration</button>
                <button type="button" class="btn btn-warning" data-toggle="tooltip" title="2 years">C# Network Programming</button>
                <button type="button" class="btn btn-danger" data-toggle="tooltip" title="2 years">MS Office Programming</button>
                <button type="button" class="btn btn-dark" data-toggle="tooltip" title="2 years">CMS Development</button>
                <button type="button" class="btn btn-light" data-toggle="tooltip" title="1 year">Git Version Control</button>
                <button type="button" class="btn btn-info" data-toggle="tooltip" title="1 year">Unix/Linux</button>
              </div>
              <!-- <div class="panel-footer">Panel Footer</div> -->
            </div>
          </div>
      </div>

      <div class="panel-group">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="capability">As a Development Lead</a>
              </h4>
            </div>
            <div>
              <div class="panel-body">
                <ul class="list-group">
                  <li class="list-group-item">Sharp eyes on root cause of technical issues</li>
                  <li class="list-group-item">Good communication skills with maximized information sharing</li>
                  <li class="list-group-item">Well understanding on needs from customers, managers and developers</li>
                  <li class="list-group-item">Able to implement requirement in detail</li>
                  <li class="list-group-item">Make things happen by actively asking correct questions</li>
                  <li class="list-group-item">Able to interview and train new developers</li>
                  <li class="list-group-item">Willing to take challenges and higher responsibilities</li>
                  <li class="list-group-item">Able to provide comprehensive technical consultation & solution</li>
                </ul>

              </div>
              <!-- <div class="panel-footer">Panel Footer</div> -->
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="headline"><h4 class=" text-left" ><a href="product">Product Demo</a></h4></div>
  <div class="row text-center demos">
    <div class="col-sm-3 website featured scidict aspnet networking ir">
      <div class="content">
        <p class="title">Bilingual Dictionary</p>
        <a title="ASP.NET Web Bilingual Dictionary" href="{$rootpath}/img/scidict2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://www.scidict.org" target="_blank"><img src="{$rootpath}/img/scidict2-min.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website featured aspnet mssql"> 
      <div class="content">
        <p class="title">User Center</p>
        <a title="ASP.NET Web User Center" href="{$rootpath}/img/usercenter2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://www.scientrans.com/users/login.aspx?email=c290cmFuc0AxMjYuY29t&pass=MTIz" target="_blank"><img src="{$rootpath}/img/usercenter2-min.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp featured csharp mssql">
      <div class="content">
        <p class="title">Project Management System</p>
        <a href="{$rootpath}/png/prjmanage2.png" target="_blank" title="C# Project Management System"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="taskassign_trans2" href="javascript:;" title="C# Project Management System"><img src="{$rootpath}/png/prjmanage2-min.png" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website featured aspnet api">
      <div class="content">
        <p class="title">Payment API</p>
        <a href="{$rootpath}/img/yeepay2.jpg" target="_blank" title="Connection to Payment API"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="paymentAPI" href="javascript:;" title="Connection to Payment API"><img src="{$rootpath}/img/yeepay2-min.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>

    <div class="col-sm-3 erp website featured aspnet mssql">
      <div class="content">
        <p class="title">Web Order Submission</p>
        <a href="{$rootpath}/img/orderonline2.jpg" target="_blank" title="ASP.NET Order Submission"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="ordersubmit" href="javascript:;" title="ASP.NET Order Submission"><img src="{$rootpath}/img/orderonline2-min.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website bootstrap canvas php mysql">
      <div class="content">
      <a href="{$rootpath}/img/seat.jpg" target="_blank"><p class="title">Bootstrap + HTML Canvas</p></a>
      <a title="Bootstrap + HTML5 Canvas Seat Selection" href="{$rootpath}/img/seat.jpg" target="_blank"><img src="{$rootpath}/img/seat-min.jpg" class="img-responsive" alt="Image"></a>
      <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 workbench featured csharp mssql networking nlp">
      <div class="content">
        <p class="title">Translator's Workbench</p>
        <a href="{$rootpath}/png/workbench1.jpg" target="_blank" title="Translation Workbench - Task List"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="workbench_trans3" href="javascript:;" title="Translation Workbench - Task List"><img src="{$rootpath}/png/workbench1-min.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp msword featured csharp nlp">
      <div class="content">
        <p class="title">MS Word Document Generation</p>
        <a href="{$rootpath}/png/docgeneration.jpg" target="_blank" title="MS Word Document Generation"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="docgenerate" href="javascript:;" title="MS Word Document Generation"><img src="{$rootpath}/png/docgeneration-min.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
  </div>
</div>

</div>
{include file="common/footer.tpl" nocache}

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="385" src="" frameborder="0" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</div>

<script src="{$rootpath}/javascripts/demo.js"></script>
<script src="{$rootpath}/javascripts/home.js"></script>
</body>
</html>
