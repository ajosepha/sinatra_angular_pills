class CreatePills < ActiveRecord::Migration
  def change
    create_table :pills do |t|
      t.string :name
      t.string :hormone
      t.string :phase

      t.timestamps
    end
  end
end


