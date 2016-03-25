$("./body") {
	add_class("mw_iphone")
	$("./div[@id='Container']/div[@id='Outer']") {
    	$("./div[@id='Wrapper']") {
 
      		$("./div[@class='Left']") {
        		# Create Togglers
            remove(".//div[@id='SideLiveChatServices']")
            remove(".//div[@id='SideCategoryShopByPrice']")
        		$("./div[@id='SideShopByBrand']") {
          		attribute("data-ur-set", "toggler")
          		$("./h2") {
            		attribute("data-ur-toggler-component", "button")
            		insert("div", class: "mw_indicator")
          		}
          		$("./div") {
            		attribute("data-ur-toggler-component", "content")
            		$(".//li/a") {
              		insert("div", class: "mw_arrow")
            		}
          		}
        		}
        	}
   
      		$("./div[@class='Content ']") {
            remove(".//div[@id='CategoryBreadcrumb']")
        		$("./div[@id='CategoryHeading']") {
          		$("./div[@class='BlockContent']") {
            		# Move page title on top of the content area
            		$("./h2") {
              			move_to("../../../../div[@class='Left']", "top")
            		}
            		$("./div[@class='FloatRight SortBox']") {
                  attribute("id", "sortbox")
              		$("./form") {
                		wrap_text_children("span")
              		}
            		}
                $("./div[@class='SubCategoryList']"){
                  $("./ul"){
                    name("div")
                    $("./li"){
                      name("div")
                    }
                  }
                }
          		}
        		}
      		}

      		$("./div[@class='Content ']") {
        		$("./div[@id='CategoryHeading']") {
          		$("./div[@class='BlockContent']") {
            		$("./div[@class='FloatRight SortBox']") {
              			
                    $("./form") {
                      insert("div", class: "mw_span")
                      insert("div", class: "mw_sort_select")
                      insert("div", class: "sort_container")
                    }
                    $("./form") {
                      $("./span") {
                        move_to("../div[@class='mw_span']")
                      }
                      $("./select") {
                        move_to("../div[@class='mw_sort_select']")
                      }
                    }
                    $("./form") {
                      $("./div[@class='mw_span']") {
                        move_to("../div[@class='sort_container']")
                      }
                      $("./div[@class='mw_sort_select']") {
                        move_to("../div[@class='sort_container']")
                      }
                    }
            		}
                remove(".//div[@class='CategoryDescription']")
          		}
        		}

            $("./div[@id='CategoryContent']") {
              $("./form") {
                $("./ul[@class='ProductList ']") {
                  $(".//li[contains(@class, 'Odd') or contains(@class, 'Even')]") {
                    remove("./div[@class='ProductCompareButton']")

                    insert("div", class: "ProductImageContainer")
                    insert("div", class: "ProductInfoContainer")

                    $("./div[@class='ProductInfoContainer']") {
                      insert("div", class: "ProductInfoDetailsContainer")
                      insert("div", class: "ProductAddBtnContainer")
                    }

                    $("./div[@class='ProductImage QuickView']") {
                      move_to("../div[@class='ProductImageContainer']")
                      attribute("id", "productimage")
                    }

                    $("./div[@class='ProductInfoContainer']") {
                      $("./div[@class='ProductInfoDetailsContainer']") {
                        move_here("../../div[@class='ProductDetails']")
                        move_here("../../div[@class='ProductPriceRating']")
                      }
                    }
                    $("./div[@class='ProductInfoContainer']") {
                      $("./div[@class='ProductAddBtnContainer']") {
                        move_here("../../div[@class='ProductActionAdd']")
                      }
                    }
                    $("./div[@class='ProductInfoContainer']") {
                      $("./div[@class='ProductInfoDetailsContainer']") {
                        $("./div[@class='ProductDetails']") {
                          $("./strong") {
                            $("./a") {
                              move_to("../../../div[@class='ProductDetails']")
                            }
                          }
                          remove("./strong")
                        }
                      }
                    }

                    $("./div[@class='ProductInfoContainer']") {
                      $("./div[@class='ProductAddBtnContainer']") {
                        $("./div[@class='ProductActionAdd']") {  
                          attribute("id", "productadd")     
                          $("./a"){
                            wrap("div", class: "mw_addtocart_btn sprites-AddCartButton")
                            attribute("style", "opacity:0;")
                          }
                          $("./div[@class='mw_addtocart_btn sprites-AddCartButton']") {
                            attribute("id", "addtocart")
                          }
                        }
                      }
                    }
                  }
                }
                $("./ul[@class='ProductList ']") {
                  name("div")
                  $("./li") {
                    name("div")
                  }
                }
                remove("./div[@class='CompareButton']")                
              }
            }
            remove(".//div[@id='CategoryPagingBottom']")
            remove(".//div[@id='CategoryPagingTop']")
      		}
          remove(".//div[@class='Right']")
    	}
  	}
	remove(".//div[@id='SideNewsletterBox']")
}
