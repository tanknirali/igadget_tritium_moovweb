$("./body") {
	add_class("mw_product")
	$("./div[@id='Container']/div[@id='Outer']") {
    	$("./div[@id='Wrapper']") {
    		remove("./div[@class='Left']")
            remove("./div[@class='Right']")
    		$("./div[@class='Content']") {
    			remove("./div[@id='ProductBreadcrumb'] | ./div[@id='ProductTabs'] | ./div[@id='ProductVideos'] | ./div[@id='ProductWarranty'] | ./div[@id='ProductOtherDetails'] | ./div[@id='SimilarProductsByTag']")
    			$("./div[@id='ProductDetails']") {
    				$("./div[@class='BlockContent']") {
    					remove("./div[@class='Clear AddThisButtonBox']")

                        $("./div[@class='ProductThumb']") {
                           # remove_attributes()
                        }
                        $("./div"){
                            attribute("id", "mw_product")
                        }
                        $("./div[@class='ProductMain']") {
                            attribute("id", "mw_productmain")
                        }
                        $("./div[@id='mw_product']") {
                            attribute("class", "Product_Thumb")
                        }
                        $("./div[@class='Product_Thumb']") {
                            $("./div[@class='ProductThumbImage']") {
                                $("./a"){
                                    attribute("id", "a_tag")
                                }
                                #  remove_attributes()
                            }
                            remove("./div[@id='LightBoxImages'] | ./script | ./div[@class='SeeMorePicturesLink']")
                            $("./div") {
                                attribute("id", "mw_product_image")
                            }
                        
                            insert("div", class: "ImageCarouselContainer")
                            $("./div[@class='ImageCarouselContainer']") { 
                                move_here("../div[@class='ImageCarouselBox']/div[@class='ProductTinyImageList']")
                                $("./div[@class='ProductTinyImageList']") { 
                                    
                                    $("./ul") {
                                        attribute("class", "ProductContainer")
                                        $("./li") {
                                           attribute("id", "showproductThumbImage")
                                           $("./div[@class='TinyOuterDiv']") { 
                                                $("./div") {
                                                    $("./a") {
                                                        attribute("id", "a_tag1")
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } 
                            }
                            remove("./div[@class='ImageCarouselBox']")
                        }

                        $("./div[@class='ProductMain']") {
                            $("./div[@class='ProductDetailsGrid']") {
                                #remove("./div[@class='DetailRow RetailPrice']")

                            }
                          
                            $("./div[@class='productAddToCartRight']") {
                                $("./form") {
                                    $("./div[@class='ProductDetailsGrid ProductAddToCart']") {
                                        attribute("id", "productdetailsgrid")
                                      # remove("./div[@class='ProductOptionList'] | ./div[@class='productAttributeList']")
                                      # insert("div", class: "Detail_Row")
                                      # $("./div[@class='DetailRow']") {
                                      #     $("./div[@class='Value AddCartButton']") {
                                      #         $("./div[@class='BulkDiscount']") {
                                      #             move_to("../../../div[@class='Detail_Row']")
                                      #             remove("./div[@class='BulkDiscountLink']")
                                      #          }
                                      #      }
                                      #  }
                                    }
                                }
                                remove("./div[@class='OutOfStockMessage']")
                            }
                        }
    				}
    			}


                $("./div[@id='ProductByCategory']") {
                    $("./div[@class='FindByCategory']") {
                        $("./ul") {
                            name("div")
                            $("./li") {
                                name("div")
                            }
                        }
                    }
                }
                $("./div[@id='SimilarProductsByCustomerViews']") {
                    $("./div[@class='BlockContent']") {
                        $("./ul[@class='ProductList']") {
                            $(".//li[contains(@class, 'Odd') or contains(@class, 'Even')]") {

                                insert("div", class: "ProductImageContainer")
                                insert("div", class: "ProductInfoContainer")

                                $("./div[@class='ProductInfoContainer']") {
                                    insert("div", class: "ProductInfoDetailsContainer")
                                    insert("div", class: "ProductAddBtnContainer")
                                }

                                $("./div[@class='ProductImage']") {
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
                            }
                        }
                    }
                }
    	    }
    	}
    }
}