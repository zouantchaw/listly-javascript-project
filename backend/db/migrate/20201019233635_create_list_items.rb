class CreateListItems < ActiveRecord::Migration[6.0]
  def change
    create_table :list_items do |t|
      t.string :content
      t.string :list_id, null: false

      t.timestamps
    end
  end
end
