window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) 
    {
        document.getElementById("toTop").style.display = "block";
    } 
    else 
    {
        document.getElementById("toTop").style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 