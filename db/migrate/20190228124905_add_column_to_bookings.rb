class AddColumnToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :description, :text
  end
end
