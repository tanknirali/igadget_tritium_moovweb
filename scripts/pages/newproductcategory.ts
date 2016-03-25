$("./body") {
	add_class("mw_newproduct")
	$("./div[@id='Container']/div[@id='Outer']") {
    	$("./div[@id='Wrapper']") {

          remove(".//div[@class='Right']")
      		$("./div[@class='Left']") {
        		# Create Togglers
            remove(".//div[@id='SideCategoryShopByPrice']")
        		$("./div[@id='SideShopByBrand']") {
          		attribute("data-ur-set", "toggler")
          		$("./h2") {
            		attribute("data-ur-toggler-component", "button")
            		insert("div", class: "mw_indicator")
          		}
          		$(".//div[@class='BlockContent']") {
            		attribute("data-ur-toggler-component", "content")
            		$("./ul"){
                  $("./li/a") {
                    insert("div", class: "mw_arrow")
                  }
                } 
          		}
        		}
        	}
   
      		$("./div[@id='LayoutColumn2']") {
            remove(".//div[@id='CategoryBreadcrumb']")
        		remove(".//div[@id='CategoryPagingTop']")
            $("./div[@id='CategoryHeading']") {
              $("./div[@class='BlockContent']") {
                # Move page title on top of the content area
                remove(".//div[@class='CategoryDescription']")
                $("./h2") {
                    move_to("../../../../div[@class='Left']", "top")
                }
                
              }
              remove(".//div[@id='CategoryPagingBottom']")
            }
      		}
    	}
  	}
	remove(".//div[@id='SideNewsletterBox']")
}
