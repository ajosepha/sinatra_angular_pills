require 'bundler'
Bundler.require

require 'sinatra/activerecord'
require './lib/pill'

Dir.glob('./lib/*.rb') do |model|
  require model
end

class PillcatApp < Sinatra::Application

  configure do
    set :root, File.dirname(__FILE__)
    set :public_folder, 'public/app'
  end

  set :database, "sqlite3:///database.db"

  get '/' do
    #{}"hi"
    File.read(File.join('public/app', 'index.html'))
  end

  get '/pills' do
    @pill = Pill.all
    @pill.to_json
  end

end


