class Pill < ActiveRecord::Base

  serialize :preferences, Array

  def self.make_pills
    scraper = Scraper.new("http://www.nlm.nih.gov/medlineplus/druginfo/meds/a601050.html#brand-name-2") 
    hashes = scraper.format
    hashes.each do |pill|
      p = Pill.new(pill)
      p.save
    end 
  end

end