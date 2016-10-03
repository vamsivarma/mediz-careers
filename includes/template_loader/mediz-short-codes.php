<?php
	
	//About Us Page Template
	function mediz_aboutus() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_aboutus', 'mediz_aboutus' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_aboutus', 'mediz_aboutus' );
	
	//Contact Us Page Template
	function mediz_contactus() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_contactus', 'mediz_contactus' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_contactus', 'mediz_contactus' );
	
	//Contact Us Page Template
	function mediz_contactus_success() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_contactus_success', 'mediz_contactus_success' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_contactus_success', 'mediz_contactus_success' );
	
	//Employer Page Template
	function mediz_employer() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_employer', 'mediz_employer' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_employer', 'mediz_employer' );
	
	//Employer Form Submit Success Page Template
	function mediz_employer_success() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_employer_success', 'mediz_employer_success' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_employer_success', 'mediz_employer_success' );

	//Express Resume Page Template
	function mediz_express_resume() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_express_resume', 'mediz_express_resume' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_express_resume', 'mediz_express_resume' );

	//Express Resume Form Submit Success Page Template
	function mediz_express_resume_success() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_express_resume_success', 'mediz_express_resume_success' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_express_resume_success', 'mediz_express_resume_success' );

	//Job Seekers Page Template
	function mediz_jobseekers() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_jobseekers', 'mediz_jobseekers' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_jobseekers', 'mediz_jobseekers' );

	//Menu Section Template
	function mediz_menu() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_menu', 'mediz_menu' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_menu', 'mediz_menu' );
	
	//Upload Profile Form Page Template
	function mediz_upload_profile() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_upload_profile', 'mediz_upload_profile' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_upload_profile', 'mediz_upload_profile' );

	//Upload Profile Form Submission Success Page Template
	function mediz_upload_profile_success() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_upload_profile_success', 'mediz_upload_profile_success' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_upload_profile_success', 'mediz_upload_profile_success' );
	
	//Mediz Header Template
	function mediz_header() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_header', 'mediz_header' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_header', 'mediz_header' );

	//Mediz Footer Page Template
	function mediz_footer() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_footer', 'mediz_footer' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_footer', 'mediz_footer' );
	
	//Mediz Carousel Template
	function mediz_carousel() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_carousel', 'mediz_carousel' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_carousel', 'mediz_carousel' );
	
	//Mediz Terms of Service page template
	function mediz_termsofservice() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_termsofservice', 'mediz_termsofservice' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_termsofservice', 'mediz_termsofservice' );
	
	//Mediz Privacy policy page template
	function mediz_privacypolicy() {

		$templates = new MEDIZ_Template_Loader;

		ob_start();
		$templates->get_template_part( 'mediz_privacypolicy', 'mediz_privacypolicy' );
		return ob_get_clean();

	}
	add_shortcode( 'mediz_privacypolicy', 'mediz_privacypolicy' );
	
	//Start of inline shortcodes
	//Mediz Page Content Header
	function mediz_page_content_header($atts) {

		$a = shortcode_atts( array(
        		'rel' => 'Previous Page',
        		'title' => 'Page Title',
    			), $atts );

		ob_start();
	?> 
		<div class="clear-both-common content-header-holder">
			<div class="left-float-common js-button-action-common previous-page-nav" rel="<?php echo $a['rel'] ?>">
				<img src="http://www.medizcareer.com/wp-content/uploads/2016/07/back_arrow_black.png" class="custom-logo" alt="Go to previous page" />
			</div>
			<div class="page-heading-common left-float-common"><?php echo $a['title']?></div>
		</div>
	
	<?php
	
		return ob_get_clean();
	}
	add_shortcode( 'mediz_page_content_header', 'mediz_page_content_header' );
	
	//Mediz Page Content Footer
	function mediz_page_content_footer() {


		ob_start();
	?> 
		<div class="text-center-common">
			<div class="btn btn-success js-button-action-common mediz-button-common" rel="default">Go To Home Page</div>
		</div>	
	<?php
	
		return ob_get_clean();
	}
	add_shortcode( 'mediz_page_content_footer', 'mediz_page_content_footer' );