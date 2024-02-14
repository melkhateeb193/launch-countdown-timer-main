function setTime ()
{
    const date = new Date();
    const days = date.getDate().toString().padStart(2,0);
    const hours = date.getHours().toString().padStart(2,0);
    const Minites = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    document.getElementById('days-span-number').textContent=days;
    document.getElementById('Hours-span-number').textContent=hours;
    document.getElementById('MINUTES-span-number').textContent=Minites;
    document.getElementById('SECONDS-span-number').textContent=seconds;
}


setTime()
setInterval(setTime)