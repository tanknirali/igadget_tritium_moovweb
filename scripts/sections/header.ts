# $('./body') {
#   insert_top("header", class: "mw-header") {
#     Move stuff here
#   }
# }
$('./body') {
  remove(".//div[@id='AjaxLoading']")

  $(".//div[@id='Header']") {
  	
  	$("./div[@id='Logo']") {
      	move_here("../../../div[@id='TopMenu']", "bottom") {
      		remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
      	}
      	$("./div[@id='TopMenu']") {
      		$("./ul") {
      			$("./li[contains(@class, 'First')]") {	
      				insert("div", class: "mw_user_btn sprites-user")	
      			}
      			$("./li[contains(@class, 'CartLink')]") {	
      				insert("div", class: "mw_cart_btn sprites-cart")		
      			}
      			
      		}
      		remove("./br")
  		  }

        $("./div[@id='TopMenu']") {
          $("./ul") {
            $("./li[contains(@class, 'First')]") {
              $("./a"){
                move_to("../div[@class='mw_user_btn sprites-user']")
              }
            }

            $("./li[contains(@class, 'CartLink')]") {
              $("./a"){
                move_to("../div[@class='mw_cart_btn sprites-cart']")
              }
            }
          }
        }
  	}

      remove("./br|./script")

      insert("div", class: "mw_header_bottom") {
    		insert("div", class: "mw_search")
    		insert("div", class: "mw_menu_btn sprites-menu")
    		log('html markups inserted in header bottom')
  	}

  	$("..//div[@class='mw_header_bottom']") {
  		$("..//div[@class='mw_menu_btn sprites-menu']") {
          	attribute("data-ur-toggler-component", "button")
      	}
  	}
  	$("..//div[@class='mw_header_bottom']") {
      attribute("data-ur-set", "toggler")
  		$("..//div[@class='mw_search']") {
  			# Move search form into container element
  			move_here("//div[@id='SearchForm']", "bottom") {
      			remove("./p")

      			$("./form") {
        				remove("./label")
        				# Change search button background image
        				$("./input[@type='image']") {
          				wrap("div", class: "mw_search_btn sprites-search")
          				attribute("style", "opacity:0;")
        				}
        				$("./input[@type='text']") {
          				attribute("placeholder", "Search...")
        				}
      			}
    			}
  		}

  		move_here("//div[@id='Menu']", "bottom"){
        $$("li") {
      		add_class("mw_bar2")
    		}
      }	
  		
  		$("./div[@id='Menu']") {
      	$$("ul") {
      		add_class("menu")
    		}
      }

  		$("./div[@id='Menu']") {
  			$("./ul") {
          move_to("../../../div[@class='mw_header_bottom']", "bottom")
        }
      }
  		
  		remove(".//div[@id='Menu']")

  		$("..//ul[@class=' menu']") {
  			attribute("id", "menu")
  		}

      $("..//div[@class='mw_menu_btn sprites-menu']") {
        attribute("id", "menu_btn")
      }

      move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")

      $("./div[@id='SideCategoryList']") {
        $("..//div[@class='BlockContent']") {
          $("..//div[@class='SideCategoryListClassic']") {
            $("..//ul[@class='category-list']") {
              log('in ul')
              move_to("../../../../div[@id='SideCategoryList']", "bottom")
            }
          }
        }
      }

      $("./div[@id='SideCategoryList']") {
        remove(".//div[@class='BlockContent']")
      } 

      $("..//ul[@class=' menu']") {
        wrap("div", id: "toggler_content")
      }
   
      $("./div[@id='toggler_content']") {
        attribute("data-ur-toggler-component", "content")
      }

      $("./div[@id='SideCategoryList']") {
        move_to("../div[@id='toggler_content']", "bottom")
      } 
  	}
  }
}


