document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the 'count' cookie
  let visitCount = getCookie('count');

  // If the cookie exists, increment it; otherwise, set it to 1
  visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
  setCookie('count', visitCount, 30); // Cookie expires in 30 days

  // Display the visit count on the webpage
  let counterElement = document.createElement('p');
  counterElement.textContent = `You have visited this page ${visitCount} times.`;
  document.body.appendChild(counterElement);
});
