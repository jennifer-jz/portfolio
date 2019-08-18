const getCategory = (category) => {
  const categories = ["workbench", "erp", "scidict", "website", "msword", "featured"];
  if (categories.indexOf(category) >= 0) {
    return category;
  }
  else {
    return "";
  }
};

const getTag = (tag) => {
  const tags = ["csharp", "aspnet", "seo", "networking", "mssql", "mysql", "bootstrap", "canvas", 
    "php", "nlp", "ir", "api"];
  if (tags.indexOf(tag) >= 0) {
    return tag;
  }
  else {
    return "";
  }
};

const getVideoURL = (id) => {
  let link = "";
  if(id === "ordersubmit") {
    link = "http://www.youtube.com/embed/o-Ri-hPqhJc";
  }
  else if (id === "ordersubmit2") {
    link = "http://www.youtube.com/embed/Weu5vjUyURA";
  }
  else if (id === "paymentAPI") {
    link = "http://www.youtube.com/embed/1J-TZhXy_6c";
  }
  else if (id === "paymentAPI2") {
    link = "http://www.youtube.com/embed/bt5VkQN1yUk";
  }
  else if (id === "taskassign_trans1") {
    link = "http://www.youtube.com/embed/FnZiuFGydf0";
  }
  else if (id === "taskassign_trans2") {
    link = "http://www.youtube.com/embed/KYaYid72Ct8";
  }
  else if (id === "taskassign_edit") {
    link = "http://www.youtube.com/embed/kTP75NpnYL8";
  }
  else if (id === "quote1") {
    link = "http://www.youtube.com/embed/8UKIPYRyEg8";
  }
  else if (id === "quote2") {
    link = "http://www.youtube.com/embed/DMwnN5ca6aA";
  }
  else if (id === "quote3") {
    link = "http://www.youtube.com/embed/EFhD21YY9W0";
  }
  else if (id === "workbench_trans1") {
    link = "http://www.youtube.com/embed/HakZsKmzYK4";
  }
  else if (id === "workbench_trans2") {
    link = "http://www.youtube.com/embed/hKAqnVAOM1E";
  }
  else if (id === "workbench_trans3") {
    link = "http://www.youtube.com/embed/XbOESfZGD8Q";
  }
  else if (id === "workbench_transsubmit") {
    link = "http://www.youtube.com/embed/izGQ54fSPaA";
  }
  else if (id === "workbench_transsubmit2") {
    link = "http://www.youtube.com/embed/T23OIg6T1FY";
  }
  else if (id === "workbench_edit1") {
    link = "http://www.youtube.com/embed/b9073OMTRZk";
  }
  else if (id === "workbench_edit2") {
    link = "http://www.youtube.com/embed/rSV5H1JKYhg";
  }
  else if (id === "workbench_edit3") {
    link = "http://www.youtube.com/embed/a541UAxS4Yo";
  }
  else if (id === "workbench_editsubmit") {
    link = "http://www.youtube.com/embed/X2SYOX0oIhg";
  }
  else if (id === "workbench_editsubmit2") {
    link = "http://www.youtube.com/embed/-lU_a_am0iE";
  }
  else if (id === "docprocess1") {
    link = "http://www.youtube.com/embed/AKWqUiDinFA";
  }
  else if (id === "docprocess2") {
    link = "http://www.youtube.com/embed/oPSfr4Znvjc";
  }
  else if (id === "docprocess3") {
    link = "http://www.youtube.com/embed/iuPKTORNaKk";
  }
  else if (id === "docgenerate") {
    link = "http://www.youtube.com/embed/-lU_a_am0iE";
  }

  return link;
};

export {
  getCategory,
  getTag,
  getVideoURL,
};