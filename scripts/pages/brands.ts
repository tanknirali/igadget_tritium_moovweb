$("./body") {
	add_class("mw_brands")
	$("./div[@id='Container']/div[@id='Outer']") {
    	$("./div[@id='Wrapper']") {
    		remove(".//div[@class='Right']")
    		$("./div[@class='Left']") {
    			$("./div[@id='SideShopByBrand']") {
          			attribute("data-ur-set", "toggler")
          			$("./h2") {
            			attribute("data-ur-toggler-component", "button")
            			insert("div", class: "mw_indicator")
          			}
          			$("./div[@class='BlockContent']") {
            			attribute("data-ur-toggler-component", "content")
            			$(".//li/a") {
              				insert("div", class: "mw_arrow")
            			}
          			}
        		}
    		}

      		$("./div[@class='Content']") {
      			remove(".//div[@id='BrandBreadcrumb']")
      			$("./div[@id='BrandContent']") {
      				$("./div[@class='FloatRight SortBox']") {
      					attribute("id", "sortbox")
	                    $("./form") {
	                    	remove_text_nodes()
	                      	insert("div", class: "mw_span")
	                      	insert("div", class: "mw_sort_select")
	                      	insert("div", class: "sort_container")
	                    }

	                    $("./form") {
	                    	$("./select") {
	                        	move_to("../div[@class='mw_sort_select']")
	                      	}
	                      	$("./div[@class='mw_span']") {
	                        	move_to("../div[@class='sort_container']")

	                      	}
	                      	$("./div[@class='mw_sort_select']") {
	                        	move_to("../div[@class='sort_container']")
	                      	}
	                      	$("./div[@class='sort_container']") {
	                      		$("./div[@class='mw_span']") {
	                      			text() {
      									append("Sort by:")
    								}
	                      		}
	                      	}
	                    }
            		}
      				$("./div[@class='BlockContent']") {
      					$("./form") {
      						remove("./br[@class='Clear']")
      						remove(".//div[@class='CompareButton']")
      						$("./ul[@class='ProductList']") {
				                $("./li") {
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
				            $("./ul[@class='ProductList']") {
				                name("div")
				                $("./li") {
				                    name("div")
				                    attribute("id", "productitem")
				                }
				            }
				            $index = '';
				            $("./div[@class='ProductList']") {
				            	$("./div[@id='productitem']") {
					            	$index = $index + '1';
					            	log('out of index loop')
					            	match(length($index), 4) {
					            		log('in index loop')
					            		attribute("data-index",$index)
					            		$index = '';
					            	}
					            }
					            $("./div[@data-index='1111']") {
					            	wrap("div", class:"ProductList") {
					            		move_here(".//preceding-sibling::div[@id='productitem']")
					            	}
					            	attribute("data-index","")
					        	}
					            unwrap()
				            }
      					}
      					remove(".//div[@class='PagingBottom']")
      				}
      			}
      		}
      	}
    }
}