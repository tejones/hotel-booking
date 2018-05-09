//
//  AttendeeListViewCell.swift
//  BarcodeScanner
//
//  Created by Ted Jones - Red Hat on 12/6/17.
//

import UIKit

class AttendeeListViewCell: UITableViewCell {
    //MARK: Properties
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var company: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
