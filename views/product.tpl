<!DOCTYPE html>
<html>
{include file="common/head.tpl" nocache}
<body>
  <style type="text/css">
    .mainbody {
      padding: 20px;
      font-family: Arial;
    }
    #myBtnContainer {
      padding: 0;
      position: fixed;
      top: 60px;
      left: 65px;
      z-index: 1000;
      background: #f2f4f4;
    }
    #myBtnContainer .btn {
      border: none;
      outline: none;
      padding: 8px 16px;
      /*background-color: white;*/
      cursor: pointer;
      color: gray;
    }

    #myBtnContainer .btn:hover, #myBtnContainer .active {
      background-color: white;
      color: gray;
      box-shadow: none;
      font-weight: bold;
    }
    .row{
      margin-top: 10px;
    }
  </style>
{include file="common/navigation.tpl" nocache}

<div class="mainbody">

<div id="myBtnContainer">
  <a id="all" class="btn btn-secondary active" href="{$rootpath}/product"> All</a>
  <a id="featured" class="btn btn-secondary" href="{$rootpath}/product/featured"> Featured</a>
  <a id="workbench" class="btn btn-secondary" href="{$rootpath}/product/workbench"> Translation Workbench</a>
  <a id="erp" class="btn btn-secondary" href="{$rootpath}/product/erp"> ERP System</a>
  <a id="website" class="btn btn-secondary" href="{$rootpath}/product/website"> Web Products</a>
  <a id="msword" class="btn btn-secondary" href="{$rootpath}/product/msword"> MS Word Development</a>
  <a id="scidict" class="btn btn-secondary" href="{$rootpath}/product/scidict"> SCIDict</a>
</div>

<div class="demos container-fluid bg-3 text-center works">
  <div class="row">
    <div class="col-sm-3 workbench featured scidict csharp networking ir">
      <div class="content">
        <a class="scidictdesk" href="#" title="SCIDict Desktop Version"><p class="title">SCIDict Desktop Version</p></a>
        <a href="{$rootpath}/png/scidict.png" target="_blank" title="SCIDict Desktop Version"><img src="{$rootpath}/png/scidict.png" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 workbench csharp networking mssql">
      <div class="content">
        <a class="workbench_tasklist" href="#" title="Translation Workbench - Task List"><p class="title">Translation Workbench - Task List</p></a>
        <a href="{$rootpath}/png/workbench-tasklist.jpg" target="_blank" title="Translation Workbench - Task List"><img src="{$rootpath}/png/workbench-tasklist.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 workbench featured csharp mssql networking nlp">
      <div class="content">
        <p class="title">Translator's Workbench</p>
        <a href="{$rootpath}/png/workbench1.jpg" target="_blank" title="Translation Workbench - Task List"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="workbench_trans3" href="{$rootpath}/product/workbench_trans3" title="Translation Workbench - Task List"><img src="{$rootpath}/png/workbench1.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 workbench featured csharp mssql networking nlp">
      <div class="content">
        <p class="title">Editor's Workbench</p>
        <a href="{$rootpath}/png/workbench-edit.jpg" target="_blank" title="Translation Workbench - Task List"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="workbench_edit3" href="{$rootpath}/product/workbench_edit3" title="Translation Workbench - Task List"><img src="{$rootpath}/png/workbench-edit.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    
    <div class="col-sm-3 erp website featured aspnet mssql">
      <div class="content">
        <p class="title">Web Order Submission</p>
        <a href="{$rootpath}/img/orderonline2.jpg" target="_blank" title="ASP.NET Order Submission"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="ordersubmit" href="{$rootpath}/product/ordersubmit" title="ASP.NET Order Submission"><img src="{$rootpath}/img/orderonline2.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp csharp mssql">
      <div class="content">
        <p class="title">Internal Order Submission</p>
        <a href="{$rootpath}/png/submitorder2.jpg" target="_blank" title="Internal Order Submission"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="ordersubmit2" href="{$rootpath}/product/ordersubmit2" title="Internal Order Submission"><img src="{$rootpath}/png/submitorder2.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>

    <div class="col-sm-3 erp featured csharp mssql">
      <div class="content">
        <p class="title">Order Management System</p>
        <a href="{$rootpath}/png/ordermanage.jpg" target="_blank" title="C# Order Management System"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="quote3" href="{$rootpath}/product/quote3" title="C# Order Management System"><img src="{$rootpath}/png/ordermanage.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp featured csharp mssql">
      <div class="content">
        <p class="title">Project Management System</p>
        <a href="{$rootpath}/png/prjmanage2.png" target="_blank" title="C# Project Management System"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="taskassign_trans2" href="{$rootpath}/product/taskassign_trans2" title="C# Project Management System"><img src="{$rootpath}/png/prjmanage2.png" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp featured csharp mssql">
      <div class="content">
        <p class="title">Human Resource System</p>
        <a href="#" title="C# Human Resource System"></a>
        <a href="{$rootpath}/png/hrmanage.png" target="_blank" title="C# Human Resource System"><img src="{$rootpath}/png/hrmanage.png" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp featured csharp mssql">
      <div class="content">
        <a href="{$rootpath}/png/invoicesystem.png" target="_blank" title="C# Invoice System"><p class="title">Invoice System</p></a>
        <a id="invoice" href="{$rootpath}/product/invoice" title="C# Invoice System"><img src="{$rootpath}/png/invoicesystem.png" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp msword featured csharp nlp">
      <div class="content">
        <p class="title">MS Word Document Processing</p>
        <a href="{$rootpath}/png/docprocess1.jpg" target="_blank" title="MS Word Document Processing"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="docprocess2" href="{$rootpath}/product/docprocess2" title="MS Word Document Processing"><img src="{$rootpath}/png/docprocess1.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 erp msword featured csharp nlp">
      <div class="content">
        <p class="title">MS Word Document Generation</p>
        <a href="{$rootpath}/png/docgeneration.jpg" target="_blank" title="MS Word Document Generation"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="docgenerate" href="{$rootpath}/product/docgenerate" title="MS Word Document Generation"><img src="{$rootpath}/png/docgeneration.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>

    <div class="col-sm-3 website bootstrap canvas php mysql">
      <div class="content">
      <a title="Bootstrap + HTML5 Canvas Seat Selection" href="{$rootpath}/img/seat.jpg" target="_blank"><p class="title">Bootstrap + HTML Canvas</p></a>
      <a href="{$rootpath}/img/seat.jpg" target="_blank"><img src="{$rootpath}/img/seat.jpg" class="img-responsive" alt="Image"></a>
      <div class="tags"></div>
      </div>
    </div>

    <div class="col-sm-3 website featured scidict aspnet networking ir">
      <div class="content">
        <p class="title">Bilingual Dictionary</p>
        <a title="ASP.NET Web Bilingual Dictionary" href="{$rootpath}/img/scidict2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://www.scidict.org" target="_blank"><img src="{$rootpath}/img/scidict2.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website featured aspnet mssql"> 
      <div class="content">
        <p class="title">User Center</p>
        <a title="ASP.NET Web User Center" href="{$rootpath}/img/usercenter2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://www.scientrans.com/users/login.aspx?email=c290cmFuc0AxMjYuY29t&pass=MTIz" target="_blank"><img src="{$rootpath}/img/usercenter2.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website featured aspnet api">
      <div class="content">
        <p class="title">Payment API</p>
        <a href="{$rootpath}/img/yeepay2.jpg" target="_blank" title="Connection to Payment API"><p class="demo"><i class="material-icons">image</i></p></a>
        <a id="paymentAPI" href="{$rootpath}/product/paymentAPI" title="Connection to Payment API"><img src="{$rootpath}/img/yeepay2.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website featured seo"> 
      <div class="content">
        <p class="title">Corporate Website</p>
        <a title="HTML Corporate Website with SEO" href="{$rootpath}/img/scientrans2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://www.scientrans.com" target="_blank"><img src="{$rootpath}/img/scientrans2.jpg" class="img-responsive" alt="Image" /></a>
        <div class="tags"></div>
      </div>
    </div>
    <div class="col-sm-3 website seo"> 
      <div class="content">
        <p class="title">CMS website</p>
        <a title="CMS website: Translation Samples Center" href="{$rootpath}/img/samplecenter2.jpg" target="_blank"><p class="link"><i class="material-icons">image</i></p></a>
        <a href="http://fanyiyangli.scientrans.com" target="_blank" title="CMS website: Translation Samples Center" ><img src="{$rootpath}/img/samplecenter2.jpg" class="img-responsive" alt="Image"></a>
        <div class="tags"></div>
      </div>
    </div>

  </div>
</div><br />

<div class="container-fluid bg-3 works">
	<h4>Functional Modules</h4>
	<div class="inlinelist">
	<ul>
	<li>Email Notifications</li>
	<li>Pricing System</li>
	<li>File Upload/Download</li>
	<li>Automatic Webpage Content Updating</li>
	<li>MS Word Content Extraction and Generation</li>
	<li>MS PPT Content Extraction and Generation</li>
	<li>Real-time Spell Check</li>
	<li>Sentence Alignment</li>
	<li>File Management</li>
	<li>Corpus Management System</li>
	<li>Text Classification</li>
	<li>Text Clustering</li>
	</ul>
	</div>

</div>

</div>

{include file="common/footer.tpl" nocache}

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <iframe title="YouTube video player" class="youtube-player" type="text/html" width="640" height="385" src="{if $activelink}{$activelink}{/if}" frameborder="0" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</div>
{if $activedemo}
  <script type="text/javascript">
    $(document).ready(function(){
      $('#myModal').modal('show');
    });
  </script>
{/if}
{if $category or $tag}
  <script type="text/javascript">
    var key = "{$category}" ? "{$category}" : "{$tag}" ? "{$tag}" : "";
    $(document).ready(function(){
      filterSelection(this, key);
    });
  </script>
{/if}
<script src="{$rootpath}/javascripts/product.js"></script>
</body>
</html>
