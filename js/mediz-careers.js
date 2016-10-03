jQuery(document).ready( function() {
	
	//Set holder element DOM for central manipulation
	medizCareers.setHolderElement(jQuery('.mediz-careers-site-holder'));
	
	//medizCareers.setContentDefaults();

	//Register all the required events	
	medizCareers.registerEvents();
	
	//Render the landing page on initial load or current page on page reload based on the browser history object
	medizCareers.loadPageFromHistory();

});

//Handle Page resize width adjustments
var medizCareers = (function() {
	
	var $ = jQuery;
	var siteHolderElem = '';
	
	var landingPageId = 'default';
	var selectedPageId = '';
	var previousPageId = 'default';

	//@TODO: Need to group these page models more efficiently
	//Model which has the information on what needs to rendered in each page
	var mediz_page_model = {
		'default': {
			'showCarousel': true,
			'btnGroup': 'landing-button-group' 
		},
		'employer': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'employer_success': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'jobseekers': {
			'showCarousel': true,
			'btnGroup': 'seeker-button-group' 
		},
		'express_resume': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'express_resume_success': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'upload_profile': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'upload_profile_success': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'aboutus': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'contactus': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'contactus_success': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'termsofservice': {
			'showCarousel': false,
			'btnGroup': '' 
		},
		'privacypolicy': {
			'showCarousel': false,
			'btnGroup': '' 
		}	
	};

	function setHolderElement(holderElem) {
		siteHolderElem = holderElem;
	}
	
	function getCurrentPageIdBasedOnHistory() {
		//Load default page
		var pageId = landingPageId;
		var currentURL = Object.keys($.bbq.getState());
		
		if( currentURL.length == 1 ) {
			pageId = currentURL[0];
		}

		return pageId;	
	}
	
	//Load the page based on the browser history
	//This function gets invokes in the following scenarios....
	//On default page load, page reload, on hash change before page navigation
	function loadPageFromHistory() {
		//Load default page
		renderPage(getCurrentPageIdBasedOnHistory());	
	}

	function getMainHolderLimits() {
		var windowElem = $(window);
		var siteHeaderElem = siteHolderElem.find('#masthead.site-header.mediz-careers-header');
		var siteContentElem = siteHolderElem.find('#content.site-content.mediz-careers-content');
		var siteFooterElem = siteHolderElem.find('#mediz-footer-holder');

		return {
			'totalH': siteHeaderElem.height() + siteContentElem.height() + siteFooterElem.height(),
			'totalW': windowElem.width(),
			'contentMinH': windowElem.height() - siteHeaderElem.height() - siteFooterElem.height(),
			'contentElem': siteContentElem
		}
	}

	function setHolderLimits() {
		var limits = getMainHolderLimits();
		siteHolderElem.width(limits.totalW);
		siteHolderElem.height(limits.totalH);
	}

	function setContentDefaults() {
		var limits = getMainHolderLimits();
		var minH = (limits.contentMinH > 450) ? limits.contentMinH : 450;
		limits.contentElem.css('min-height', limits.contentMinH); 
	}
	
	//@TODO: Need to write this more efficiently
	//This function is invoked before page load and on page resize to allign the contents of the page
	//based on available window contents
	function setPageDimentions(pageId) {	
		
		var limits = getMainHolderLimits();
		var allocH = limits.contentMinH;
		var pageHolder = siteHolderElem.find('.mediz-page-section-common[rel=' + pageId + ']');

		//Set content defaults
		setContentDefaults();	
		
		if(mediz_page_model[pageId].showCarousel)
			siteHolderElem.find('.carousel-fade .carousel-inner .item').height(allocH);
		
		if(pageHolder.length && $.trim(pageHolder.html())) {
			var innerElem = pageHolder.find('.inner-holder');
			var innerH = '';
			
			//Calculating inner elements height and readjusting allocated height variable
			if(innerElem.length) {
				innerH = innerElem.height();
				allocH = (innerH > allocH) ? innerH + 60 : allocH;
			}
			
			var formResetElem = pageHolder.find('.clear-form-common');
			
			if(formResetElem.length) {
				//We reach here if the page has a form element
				//Extra 60px is for reserving space for validation messages
				allocH += 60;
			}
			
			pageHolder.height(allocH);					
		}
		
		//@TODO: Need to trigger these caculations only on page resize
		//Set the site holder dimensions 
	}
	
	function registerEvents() {

		//Common button event used for navigating between different pages
		siteHolderElem.find('.js-button-action-common').off('click').on('click', function(e){			
			var curPageId = $(this).attr("rel");
			
			if( previousPageId !== curPageId ) {		
				//Making use of BBQ plugin to change the URL
		 		// Push this URL "state" onto the history hash.
				$.bbq.pushState(curPageId, 2);
			} 
		});
		
		//Tracking window hash# changes
		// Bind a callback that executes when document.location.hash changes.
		$(window).bind( "hashchange", function(e) {
			loadPageFromHistory();
		});
				
		
		// clear cf7 error msg on form field focus
		siteHolderElem.find('.mediz-page-section-common').find("input, textarea, select").focus(function(){
			$(this).siblings('.wpcf7-not-valid-tip').hide();
		});
		
		//Capturing window resize event
		//@TODO: Need to handle this more efficiently
		$(window).on('resize', function(){
			setPageDimentions(selectedPageId);	
		});
		
		// clear cf7 error msg on form field focus
		siteHolderElem.find('.mediz-page-section-common .wpcf7').find("input, textarea, select").keyup(function(){
			toggleFormField($(this));
  		});
  		
  		siteHolderElem.find('.mediz-page-section-common .wpcf7').find("input, textarea, select").blur(function(){
			toggleFormField($(this));	
		});
		
		siteHolderElem.find('.mediz-page-section-common .wpcf7').find("input, textarea, select").on('input', function() {
			toggleFormField($(this));	
		});

	}
	
	//Hide/Show a form field label
	function toggleFormField(elem) {
		var closestLabelElem = elem.closest('li').find('label');
		if(elem.val() == '') {  
			closestLabelElem.removeClass('visibility-visible-common').addClass('visibility-hidden-common');
		} else {
 			closestLabelElem.removeClass('visibility-hidden-common').addClass('visibility-visible-common');
		}
	}

	function showPage() {
		
		var holderElem = '';
		var pageMeta = mediz_page_model[selectedPageId];
		
		if(pageMeta.showCarousel) {
			//Show the required button on the carousel if the current page contains carousel
			siteHolderElem.find('.mediz-main-menu-holder').removeClass('hide-element-common');
			siteHolderElem.find('.carousel-button').addClass('hide-element-common');

			siteHolderElem.find('.' + pageMeta.btnGroup ).removeClass('hide-element-common');
			
			holderElem = siteHolderElem.find('.page-carousel-holder');
		} else {
			holderElem = siteHolderElem.find('.mediz-page-section-common[rel=' + selectedPageId + ']');
		}
		
		holderElem.removeClass('hide-element-common');
		setPageDimentions(selectedPageId);
		
		//setHolderLimits();
		$('body').scrollTop(0);
		previousPageId = selectedPageId;
	}

	function hidePage(pageModel) {
		//Making use of Velocity library to perform animation
		pageModel.holderElem.velocity({
            				opacity: 0 //Animate until opacity of the element is zero
         			},
         			{
            				duration: 500,
            				complete: function() {
						
						pageModel.holderElem.addClass('hide-element-common').css('opacity', 1);
						
						//Show the page once the animation completes
               					showPage();
            				}
         			});
	}
	
	function renderPage(pageId) {
		
		selectedPageId = pageId;

		var pageMeta = mediz_page_model[selectedPageId];
		var previousPageMeta = mediz_page_model[previousPageId];

		var pageSectionHolderElem = siteHolderElem.find('.mediz-page-section-common[rel=' + selectedPageId + ']');
		
		
		//If page contains a form then all the persistent error and validation messages before showing the page
		var formResetElem = pageSectionHolderElem.find('.clear-form-common');
		
		if( formResetElem.length ) {
			formResetElem.click();
			pageSectionHolderElem.find('.wpcf7-not-valid-tip').hide();
			pageSectionHolderElem.find('.wpcf7-response-output').hide();
			pageSectionHolderElem.find('.wpcf7 li label').removeClass('visibility-visible-common').addClass('visibility-hidden-common');	
		}	
		
		if(selectedPageId != previousPageId) {
			//Not initial load
			//First hide the previous page using animation and
			//Once animation complete display the selected page
			if(previousPageMeta.showCarousel) {
				siteHolderElem.find('.mediz-main-menu-holder').addClass('hide-element-common');

				hidePage({
					holderElem: siteHolderElem.find('.page-carousel-holder')
				});
			} else {
				//Hide the previous page
				hidePage({
					holderElem: siteHolderElem.find('.mediz-page-section-common[rel=' + previousPageId + ']')
				});
			}

		} else {
			//For landing page or inital page load no animation is required
			showPage();
		}
		
	}	
	
	return {
		setContentDefaults: setContentDefaults,
		setHolderElement: setHolderElement,
		loadPageFromHistory: loadPageFromHistory,
		registerEvents: registerEvents,
		renderPage: renderPage
	}	
})();


