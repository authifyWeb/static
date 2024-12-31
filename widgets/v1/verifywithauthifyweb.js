document.addEventListener('DOMContentLoaded', function() {
  // Your code to run after the DOM is ready

(function authifyWebWidget() {
  // Create the widget container and add it to the page
  const widgetContainer = document.createElement('div');
 
  widgetContainer.style.zIndex = '99999';
  widgetContainer.style.backgroundColor = 'black'; // Set background to black
  widgetContainer.style.width = '150px'; // Adjusted width
  widgetContainer.style.height = 'auto'; // Adjusted height
  widgetContainer.style.display = 'flex';
 
  widgetContainer.style.alignItems = 'center';
  widgetContainer.style.justifyContent = 'center';
  widgetContainer.style.cursor = 'pointer';

  // SVG code for the widget (updated with "authifyWeb")
  const svg = `
    <svg  viewBox="0 0 545 153" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M94.312 9.277h296.851v52.567H94.312z"/></defs><path style="fill:#1c2331;fill-opacity:1;fill-rule:evenodd;stroke:#000;stroke-width:1.01518px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M.008.53h544.985v154.565H.008z"/><text xml:space="preserve" style="font-size:37.3333px;line-height:125%;font-family:Montserrat;-inkscape-font-specification:Montserrat;letter-spacing:0;word-spacing:0;white-space:pre;shape-inside:url(#a);display:inline;fill:#767676;fill-opacity:1;stroke:#000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-21.462 19.69)scale(.84996)"><tspan x="94.313" y="43.59"><tspan style="stroke:#767676">verify with</tspan></tspan></text><text xml:space="preserve" style="font-size:57.0035px;line-height:125%;font-family:Montserrat;-inkscape-font-specification:Montserrat;letter-spacing:0;word-spacing:0;fill:#767676;fill-opacity:1;stroke:#767676;stroke-width:2.13762px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" x="53.789" y="108.717"><tspan x="53.789" y="108.717" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:Montserrat;-inkscape-font-specification:Montserrat;fill:#767676;fill-opacity:1;stroke:#767676;stroke-width:2.13762px;stroke-opacity:1"><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:Montserrat;-inkscape-font-specification:Montserrat;fill:#ede3e3;fill-opacity:1;stroke:#ede3e3;stroke-opacity:1">authify</tspan><tspan style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:Montserrat;-inkscape-font-specification:Montserrat;fill:#a2fb15;fill-opacity:1;stroke:#a2fb15;stroke-opacity:1">Web</tspan></tspan></text><g stroke="#767676"><path fill="#767676" stroke-width=".023" d="M456.856 106.854a4.19 4.19 0 0 0 0-5.787 4.19 4.19 0 0 0-3.057-1.32 4.17 4.17 0 0 0-3.067 1.326 4.2 4.2 0 0 0 0 5.781 4.18 4.18 0 0 0 3.067 1.32 4.16 4.16 0 0 0 3.06-1.32zm-6.734-2.628h1.444q.03.913.24 1.682a5 5 0 0 0-.837.419 3.63 3.63 0 0 1-.847-2.101Zm.847-2.625q.392.25.838.419a7.3 7.3 0 0 0-.241 1.682h-1.444c.052-.775.35-1.508.847-2.101zm6.507 2.097h-1.451a7.3 7.3 0 0 0-.238-1.682q.449-.171.834-.422c.502.594.798 1.33.855 2.104zm-.858 2.632a5 5 0 0 0-.83-.422c.138-.505.22-1.075.24-1.682h1.448a3.63 3.63 0 0 1-.858 2.104zm-2.562-.782v-1.319h1.444a6.6 6.6 0 0 1-.214 1.514 5.6 5.6 0 0 0-1.23-.198zm1.072.693a3 3 0 0 1-.172.396c-.254.51-.57.847-.9.966v-1.527q.554.033 1.072.165zm-1.072-2.543v-1.319q.636-.033 1.23-.198c.125.462.198.98.214 1.517zm0-1.847v-1.526c.33.118.646.455.9.963a3 3 0 0 1 .165.395 5 5 0 0 1-1.065.165zm-.528 0a5.3 5.3 0 0 1-1.062-.164 3 3 0 0 1 .172-.396c.254-.508.567-.844.89-.963zm0 .528v1.32h-1.434a6.6 6.6 0 0 1 .214-1.518q.587.168 1.22.195zm0 1.847v1.319a5.6 5.6 0 0 0-1.22.195 6.6 6.6 0 0 1-.214-1.517zm0 1.847v1.526c-.323-.122-.636-.461-.89-.962a3 3 0 0 1-.172-.396q.515-.132 1.062-.165zm2.097.34q.33.128.624.306a3.6 3.6 0 0 1-1.154.7q.31-.413.527-1.007zm0-4.898a4 4 0 0 0-.534-1.006q.637.241 1.154.7a3.3 3.3 0 0 1-.62.306zm-3.66 0a4.3 4.3 0 0 1-.627-.303q.528-.469 1.165-.703a4 4 0 0 0-.538 1.01zm0 4.894q.224.594.538 1.01a3.6 3.6 0 0 1-1.161-.707q.296-.174.626-.306z"/><path fill="none" stroke-width="8.419" d="m428.162 78.197 14.035 14.038m19.648-22.458 14.039-14.038m-25.268 22.458 14.035 14.038 33.69-36.496"/></g></svg>
  `;

  // Add the SVG inside the widget container
  widgetContainer.innerHTML = svg;

  // Append the widget container to the body of the page
  document.body.appendChild(widgetContainer);

  const scriptTag = document.getElementById('authify-widget');
  const baseURL = scriptTag.getAttribute('data-url');


  // Function to encode the current page URL
  function getCurrentPageURL() {
    return encodeURIComponent(window.location.href);
  }

  // When the widget is clicked, send the current URL and open the verification page in a new tab
  widgetContainer.addEventListener('click', function() {
    const currentURL = getCurrentPageURL();
    const verifyURL = `${baseURL}/verify?url=${currentURL}`;

    // Open the verification URL in a new tab with 'rel="nofollow me"'
    const newTab = window.open(verifyURL, '_blank');
    if (newTab) {
      // Add rel="nofollow me" to the new tab
      const link = newTab.document.createElement('a');
      link.href = verifyURL;
      link.rel = 'nofollow me';
      link.target = '_blank';
      link.style.display = 'none'; 

      
      newTab.document.body.appendChild(link);
      link.click();
    }
  });
})();
});
