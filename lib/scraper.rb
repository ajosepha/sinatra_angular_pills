# require 'open-uri'
# require 'nokogiri'

class Scraper

attr_reader :html

  def initialize(url)   
      download = open(url)
      @html = Nokogiri::HTML(download)
  end  

  def get_pills
    pill = html.search("#brand-name-comb ul").text
    a = pill.split(")")
  end

  def parse
    pills = []
    get_pills.each do |item|
      pills << {:name => item.split("(containing")[0], :hormone => item.split("(containing")[1]}
    end
    pills
  end

  def format
    parse
    parse.each do |hash|
      hash[:name].strip!
    end
  end

  

end

#scraper = Scraper.new("http://www.nlm.nih.gov/medlineplus/druginfo/meds/a601050.html#brand-name-2") 
#b = scraper.parse
#ap b.to_json
#c = b.each do |element|
  #element[:name].delete!("\n")
  #end
  #b.to_json
#scraper.parse