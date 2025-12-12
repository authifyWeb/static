/* © authifyWeb.com */
/* Served from Github Repo: https://github.com/authifyWeb/static */
/* Opens widget in a new_tab*/

document.addEventListener('DOMContentLoaded', function () {
    const authifyweb_widgetContainers = document.querySelectorAll('.authifyweb-widget-container');
    
    const poweredWidgets = document.querySelectorAll('.authifyweb-powered-widget');
    poweredWidgets.forEach(poweredWidget => {
        
        const existingParagraph = poweredWidget.querySelector('.authifyweb-powered-link');
        const existingLink = existingParagraph && existingParagraph.querySelector('a');
		
        if (!existingParagraph) {
			// Create the <p> and <a> from scratch, incase it is removed from frontend.
            const poweredParagraph = document.createElement('p');
            poweredParagraph.className = 'authifyweb-powered-link';
			
            const poweredLink = document.createElement('a');
            poweredLink.href = 'https://authifyweb.com';
            poweredLink.setAttribute('aria-label', 'Visit authifyWeb');
            poweredLink.target = '_blank';
            poweredLink.rel = 'noopener nofollow noreferrer'; 
            poweredLink.textContent = 'Powered by authifyWeb'; 
			poweredParagraph.appendChild(poweredLink);
			
            const widgetContainer = poweredWidget.querySelector('.authifyweb-widget-container');
            if (widgetContainer) {
                widgetContainer.insertAdjacentElement('afterend', poweredParagraph);
				} else {
                poweredWidget.appendChild(poweredParagraph);
			}
			} else if (!existingLink) {
			// Only add <a>, if <p> exists
			const poweredLink = document.createElement('a');
			poweredLink.href = 'https://authifyweb.com';
			poweredLink.setAttribute('aria-label', 'Visit authifyWeb');
			poweredLink.target = '_blank';
			poweredLink.rel = 'noopener nofollow noreferrer'; 
			poweredLink.textContent = 'Powered by authifyWeb'; 
			existingParagraph.innerHTML = ''; 
			existingParagraph.appendChild(poweredLink);
		}
	});
    
	
    
	if (!document.getElementById('authifyweb-widget-styles')) { 
		const authifyweb_style = document.createElement('style');
		authifyweb_style.id = 'authifyweb-widget-styles'; 
		authifyweb_style.innerHTML = `
		.authifyweb-widget-container {
		display: flex;
		max-width: 150px;
		max-height: 50px;
		background-color: black;
		border-radius: 10px;
		border: 3px solid #767676;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		}
		.authifyweb-widget svg {
		width: 150px;
		height: 48px;
		}
		.authifyweb-widget a {
		margin-top: 3px;
		display: flex; 
		}
		.authifyweb-powered-link a {
	      //pointer-events: none;
		text-decoration: none;
		color: inherit;
		font: inherit;
		}
		.authifyweb-powered-link {
		margin: 5px 0px 20px 5px;
		font-family: 'Montserrat','Poppins', 'Rubik', 'Nunito Sans', sans-serif;
		font-size: 12px;
		}
		.authifyweb-powered-widget { 
		font: inherit;
		line-height: inherit;
		}
		
		`;
		document.head.appendChild(authifyweb_style);
	}
    
	
    
	authifyweb_widgetContainers.forEach(authifyweb_container => {
		
		if (authifyweb_container.querySelector('.authifyweb-widget')) return;
		
		const widgetDiv = document.createElement('div'); 
		widgetDiv.classList.add('authifyweb-widget');
		
		const authifyweb_svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 545 153"><defs><path id="a" d="M94.312 9.277h296.851v52.567H94.312z"/></defs><text xml:space="preserve" fill="#767676" stroke="#000" font-family="Montserrat" font-size="45.924" letter-spacing="0" style="line-height:125%;-inkscape-font-specification:Montserrat;white-space:pre;shape-inside:url(#a)" transform="translate(-21.462 7.69) scale(.84996)" word-spacing="0"><tspan x="94.313" y="49.647"><tspan stroke="#767676">verify with</tspan></tspan></text><text xml:space="preserve" x="53.789" y="108.717" fill="#767676" stroke="#767676" stroke-width="2.138" font-family="Montserrat" font-size="57.004" letter-spacing="0" style="line-height:125%;-inkscape-font-specification:Montserrat" word-spacing="0"><tspan x="53.789" y="108.717" font-weight="300" style="-inkscape-font-specification:&quot;Montserrat Light&quot;"><tspan fill="#ede3e3" stroke="#ede3e3" style="-inkscape-font-specification:&quot;Montserrat Light&quot;">authify</tspan><tspan fill="#a2fb15" stroke="#a2fb15" style="-inkscape-font-specification:&quot;Montserrat Light&quot;">Web</tspan></tspan></text><g stroke="#767676"><path fill="#767676" stroke-width=".023" d="M456.855 106.854a4.195 4.195 0 0 0 0-5.787 4.175 4.175 0 0 0-3.057-1.32 4.173 4.173 0 0 0-3.067 1.326 4.201 4.201 0 0 0 0 5.781 4.18 4.18 0 0 0 3.067 1.32 4.163 4.163 0 0 0 3.06-1.32zm-6.734-2.628h1.445c.02.607.098 1.174.24 1.682a4.782 4.782 0 0 0-.837.419 3.667 3.667 0 0 1-.848-2.101Zm.848-2.625c.26.165.54.307.837.419a7.354 7.354 0 0 0-.24 1.682h-1.445c.053-.775.35-1.507.848-2.101zm6.506 2.097h-1.45a7.394 7.394 0 0 0-.238-1.682c.296-.115.577-.253.834-.422a3.67 3.67 0 0 1 .854 2.104zm-.857 2.632a4.785 4.785 0 0 0-.831-.422 7.304 7.304 0 0 0 .24-1.682h1.448a3.664 3.664 0 0 1-.857 2.104zm-2.563-.782v-1.319h1.445a6.991 6.991 0 0 1-.215 1.514 5.593 5.593 0 0 0-1.23-.198zm1.072.693a4.459 4.459 0 0 1-.171.396c-.254.51-.57.847-.9.966v-1.527c.369.02.725.076 1.071.165zm-1.072-2.543v-1.319a5.603 5.603 0 0 0 1.23-.198c.126.462.198.98.215 1.517zm0-1.846v-1.527c.33.118.647.455.9.963a3.02 3.02 0 0 1 .165.395 5.055 5.055 0 0 1-1.065.165zm-.527 0a5.135 5.135 0 0 1-1.062-.165 4.287 4.287 0 0 1 .171-.396c.254-.508.567-.844.89-.963zm0 .527v1.32h-1.435a6.991 6.991 0 0 1 .215-1.518c.389.112.8.178 1.22.195zm0 1.847v1.32a5.6 5.6 0 0 0-1.22.194 6.876 6.876 0 0 1-.215-1.517zm0 1.847v1.527c-.324-.122-.637-.462-.89-.963a4.076 4.076 0 0 1-.172-.396 5.31 5.31 0 0 1 1.062-.165zm2.097.34c.218.085.429.187.623.306a3.647 3.647 0 0 1-1.154.7c.205-.275.386-.614.528-1.007zm0-4.898a3.967 3.967 0 0 0-.534-1.006c.422.159.811.396 1.154.7a4.013 4.013 0 0 1-.62.306zm-3.66 0a4.346 4.346 0 0 1-.627-.303 3.66 3.66 0 0 1 1.164-.703 3.947 3.947 0 0 0-.537 1.01zm0 4.894c.148.393.33.732.537 1.01a3.657 3.657 0 0 1-1.16-.707 4.78 4.78 0 0 1 .626-.306z"/><path fill="none" stroke-width="8.419" d="m428.161 78.197 14.036 14.038m19.648-22.457 14.038-14.04m-25.267 22.459 14.035 14.038 33.69-36.496"/></g></svg>`;
		
		const authifyweb_link = document.createElement('a');
		authifyweb_link.target = '_blank';
		authifyweb_link.rel = 'noopener noreferrer'; 
		authifyweb_link.setAttribute('aria-label', 'Verify this website with authifyWeb');
		authifyweb_link.innerHTML = authifyweb_svg;
		
		// Generate the full link only when the user click on widget
		authifyweb_link.addEventListener('click', function (e) {
			const baseUrl = authifyweb_container.getAttribute('data-authifyweb-link');
			if (!baseUrl) return;
			
			const dynamicLink = `${baseUrl}/verify?url=` + encodeURIComponent(window.location.href);
			authifyweb_link.href = dynamicLink;
		});
		
		widgetDiv.appendChild(authifyweb_link);
		authifyweb_container.appendChild(widgetDiv);
	});
	
});
