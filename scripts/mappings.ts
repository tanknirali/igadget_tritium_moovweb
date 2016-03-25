/*
  NEW Mappings

  PLEASE SEE: page_type.ts to define the $page_type variable first!

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {
  match($path) {
    with(/index|^\/$/) {
      log("--> Importing pages/home.ts in mappings.ts")
      @import pages/home.ts
    }
    with(/shop-misc/) {
      log("--> Importing pages/category.ts in mappings.ts")
      @import pages/category.ts
    }
    with(/shop-new-product-category/) {
      log("--> Importing pages/newproductcategory.ts in mappings.ts")
      @import pages/newproductcategory.ts
    }
    with(/shop-iphone/) {
      log("--> Importing pages/iphonecategory.ts in mappings.ts")
      @import pages/iphonecategory.ts
    }
    with(/shop-ipod/) {
      log("--> Importing pages/ipodcategory.ts in mappings.ts")
      @import pages/ipodcategory.ts
    }
    with(/shop-mac/) {
      log("--> Importing pages/maccategory.ts in mappings.ts")
      @import pages/maccategory.ts
    }
    with(/sample-product/) {
      log("--> Importing pages/product.ts in mappings.ts")
      @import pages/product.ts 
    }
    with(/brands/) {
      log("--> Importing pages/brands.ts in mappings.ts")
      @import pages/brands.ts 
    }
    else() {
      log("--> No page match in mappings.ts")
    }
  }
}
