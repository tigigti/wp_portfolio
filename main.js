jQuery(document).ready(function($){

	function fadeInOnView(){
	   $(window).scroll(function(){
	        var viewportTop = $(window).scrollTop();
	        var viewportBottom = viewportTop + $(window).height();
	        $(".animated-icon").each(function(){
	        	// Abstand von Oberster Rand des Dokuments
	            var iconPosTop = $(this).offset().top;
	            var iconPosBottom = iconPosTop + $(this).height();

	            //Get the position and height of the view and the element
	            // Check if the element is inside the view and animate it
	            if(viewportTop <= iconPosTop && viewportBottom >= iconPosBottom) {
	                if(!$(this).hasClass("fadeInDown")) {
	                    $(this).addClass("fadeInDown");
	                }
	            }
	            else {
	                $(this).removeClass("fadeInDown");
	            }
	        });
	   });
	}

	function modalAnimation(){
		var modal = $("#modal");
		var closeSymbol = $("#close-modal");
		var showAnim = "zoomInDown";
		var exitAnim = "bounceOut";

		$("#contact-btn").click(function(){
			modal.show();
			modal.addClass(showAnim);
		});
		closeSymbol.click(function(){
			modal.removeClass(showAnim);
			modal.addClass(exitAnim);
			setTimeout(function(){
				modal.hide();
				modal.removeClass(exitAnim);
			},1000);
		});
	}

	function fancyForm(){
		$(".form-group input").each(function(){
		    if($(this).val() != ""){
		        $(this).siblings().addClass("active");
		    }
		});

		$(".form-group input").focusin(function(){
		    $(this).siblings().addClass("active");
		}).blur(function(){
		    if($(this).val() == ""){
		        $(this).siblings().removeClass("active");
		    }
		});
	}

	function handleFormRequest(){
		$("#modal-form").submit(function(e){
			e.preventDefault();
			var serializedData = $(this).serializeArray();
			var data = {};
			data.action = "send_email";
			for(var i = 0; i < serializedData.length; i++){
				var key 	= serializedData[i].name;
				var value 	= serializedData[i].value;
				data[key] = value;
			}

			$("#responses").html("Wird gesendet...");
			$("#responses").removeClass("successfull failed");
			$("#responses").addClass("sending");
			$.ajax({
				url: ajaxurl,
				data: data,
				type: "post"
			}).done(function(res){
				res = JSON.parse(res);
				$("#responses").removeClass("sending");
				$("#responses").html(res.message);
				if(res.status=="success"){
					$("#responses").addClass("successfull").removeClass("failed");
				}
				else {
					$("#responses").addClass("failed").removeClass("successfull");
				}
			}).fail(function(){
				console.log("request failed");
			});
		});
	}

	function anchorFunction(){
		var anchorElm = document.getElementById("anchor");
		if(!anchorElm){
			return
		}
		// Scroll to top on click
		anchorElm.addEventListener("click",function(){
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		});

		// Display the Anchor after scrolling
		document.addEventListener("scroll",function(){
			if(window.pageYOffset > 1000){
				$(anchorElm).fadeIn(500);
			}
			else {
				$(anchorElm).fadeOut(500);
			}
		});
	}

	modalAnimation();
	fancyForm();
	fadeInOnView();
	handleFormRequest();
	anchorFunction();

});