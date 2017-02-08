showmesssage();
function showmesssage()
{
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var month=date.getMonth();
    var day=date.getDate();
    var year=date.getFullYear();
    display(); 
    function display()
    {
    document.write("Date:"+hour+":"+min+"<br/>"+"Year"+":"+month+"/"+day+"/"+year);
    }
}