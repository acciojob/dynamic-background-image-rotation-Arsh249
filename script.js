//your JS code here. If required.
 function setBackgroundImage() {
            if (window.innerWidth > window.innerHeight) {
                // Landscape mode
                document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
            } else {
                // Portrait mode
                document.body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
            }
        }

        // Initial check
        setBackgroundImage();

        // Add event listener for resize event
        window.addEventListener('resize', setBackgroundImage);