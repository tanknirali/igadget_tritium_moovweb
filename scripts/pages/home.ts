# Place holder/example file
$("/html/body") {
	add_class("mw_home")
	remove(".//div[@id='SideNewsletterBox']")
	$("./div[@id='Container']/div[@id='Outer']") {
          	$("./div[@id='Wrapper']") {
          	#	remove(".//div[@id='LayoutColumn1']")

                  remove(".//div[@id='LayoutColumn3']")

                  $("./div[@class='Content']") {
                        remove(".//div[@id='HomeRecentBlogs']")
                        $("./div[@id='HomeFeaturedProducts']") {
                              attribute("data-ur-set", "carousel")
                              attribute("data-ur-autoscroll", "disabled")
                              attribute("data-ur-fill", "2")
                              attribute("data-ur-clones", "2")
                              attribute("data-ur-carousel-component", "view_container") 
                              $("./h2") {
                                    remove("./span")         
                              }
                        }

                        $("./div[@id='HomeNewProducts']") {
                              attribute("data-ur-set", "carousel")
                              attribute("data-ur-autoscroll", "disabled")
                              attribute("data-ur-fill", "2")
                              attribute("data-ur-clones", "2")
                              attribute("data-ur-carousel-component", "view_container") 
                              $("./h2") {
                                    remove("./span")
                              }
                        } 
                        
                        $(".//div[contains(@id, 'HomeFeaturedProducts') or contains(@id, 'HomeNewProducts')]") {  
                              
                              insert("div", class: "CarouselBtnPrevious")
                              insert("div", class: "CarouselBtnNext")
                              insert("div", class: "CarouselCount")
                              insert("div", class: "mw_dots")
                              $("./div[@class='CarouselBtnPrevious']") {
                                    attribute("data-ur-carousel-component", "button") 
                                    attribute("data-ur-carousel-button-type", "prev") 
                                    
                              }
                              $("./div[@class='CarouselBtnNext']") {
                                    attribute("data-ur-carousel-component", "button")
                                    attribute("data-ur-carousel-button-type", "next")
                                    
                              }
                              $("./div[@class='CarouselCount']") {
                              #      attribute("data-ur-carousel-component", "count") 
                              }
                              $("./div[@class='mw_dots']") {
                                    attribute("data-ur-carousel-component", "dots") 
                              }
                              $("./div[@class='BlockContent']") {
                                    attribute("data-ur-carousel-component", "scroll_container") 
                                    
                                    $("./ul[@class='ProductList']") {
                                          $("./li"){
                                              move_to("../../../div[@class='BlockContent']")   
                                          }             
                                    }
                                    remove(".//ul[@class='ProductList'] | br[@class='Clear']")
                                    
                                    $("./li") {      
                                          attribute("data-ur-carousel-component", "item")
                                    }
                                    $(".//li[contains(@class, 'Odd') or contains(@class, 'Even')]") {  
                                          $("./div[@class='ProductActionAdd']") { 
                                                attribute("id", "productadd")     
                                                $("./a"){
                                                      wrap("div", class: "mw_addtocart_btn sprites-AddCartButton")
                                                      attribute("style", "opacity:0;")
                                                }
                                                $("./div[@class='mw_addtocart_btn sprites-AddCartButton']")
                                                {
                                                      attribute("id", "addtocart")
                                                }

                                          }
                                          $("./div[@class='ProductImage QuickView']") {
                                                attribute("id", "productimage")
                                          #      insert("div", class: "QuickView")
                                              
                                          }
                                        
                                    }
                              }
                        }
                  }
            }    
      }
}


