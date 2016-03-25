match_not($host, /^(m|t)\./) {
  # disallow crawling for non-prod environments
  match($path, /^\/robots\.txt/) {
    set("User-agent: *\nDisallow: /")
  }
}

