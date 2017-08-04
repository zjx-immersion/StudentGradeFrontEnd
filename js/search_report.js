$(function(){

  const dbKey = "report";
  initData();
  reloadInitData();

  function reloadInitData(){
      const gradeReport = JSON.parse(localStorage.getItem(dbKey))
      if (!gradeReport){
        return;
      }
      rederTable(gradeReport);
  }

  function initData() {
    const gradeReport = {
      gradeItems: [
        {name: "Jason", math: 90, chinese: 80, english: 85, program: 95, middleScore: 88, totalScore: 350},
        {name: "Tom", math: 95, chinese: 85, english: 80, program: 95, middleScore: 88, totalScore: 350},
        {name: "Hack", math: 80, chinese: 80, english: 90, program: 70, middleScore: 88, totalScore: 350}
      ],
      classMiddleScore: 350,
      classTotalScore: 1050
    };
    localStorage.setItem(dbKey, JSON.stringify(gradeReport));
  }

  function rederTable(gradeReport){
    console.log(gradeReport);
    $("#gradeReportTemplate").template("gradeReport");
    const table=$.tmpl("gradeReport", gradeReport);
    $("#studentGradeReport").html(table);
  }

  function registerSearchEvent(idOfButton){
    $("#"+ idOfButton).click(function(){
      let id = $("#" + idOfButton +"Txt").val();
      console.log(id);
      const students = searchStudents(id);
      rederTable(students);
    })
  }

})
