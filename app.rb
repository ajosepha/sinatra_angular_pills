require 'bundler'
Bundler.require

require 'sinatra/activerecord'
#require './lib/pill'

require 'active_record'


Dir.glob('./lib/*.rb') do |model|
  require model
end

class PillcatApp < Sinatra::Application

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, 'public/app'
  end

  # set :database, "sqlite3:///database.db"

  get '/' do
    File.read('public/index.html')
  end

  get '/pills' do
    @pills = Pill.all
    @pills.to_json
  end

end


