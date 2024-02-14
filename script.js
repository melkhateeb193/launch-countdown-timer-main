function setTime ()
{
    const date = new Date();
    const days = date.getDate().toString().padStart(2,0);
    const hours = date.getHours().toString().padStart(2,0);
    const Minites = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    document.getElementById('Days-card').textContent=days;
    document.getElementById('Hours-card').textContent=hours;
    document.getElementById('MINUTES-card').textContent=Minites;
    document.getElementById('SECONDS-card').textContent=seconds;
}



setTime()
setInterval(setTime)