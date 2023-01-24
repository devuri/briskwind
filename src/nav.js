( function() {
	const navBar = document.getElementById( 'mobile-menu' );
	const button = document.getElementById( 'mobile-menu-btn' );

	button.addEventListener( 'click', function() {
		navBar.classList.toggle( 'toggled' );
		navBar.classList.toggle('hidden');

		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
			button.setAttribute( 'aria-expanded', 'false' );
		} else {
			button.setAttribute( 'aria-expanded', 'true' );
		}
	} );

	document.addEventListener( 'click', function( event ) {
		const onClickbutton = button.contains( event.target );
		const onClickNavigation = navBar.contains( event.target );

		if ( false === onClickbutton && false === onClickNavigation ) {
			navBar.classList.remove( 'toggled' );
			button.setAttribute( 'aria-expanded', 'false' );
			navBar.classList.add('hidden');
		}
	} );

}() );
