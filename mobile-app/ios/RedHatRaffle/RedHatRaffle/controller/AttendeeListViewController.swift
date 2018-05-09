//
//  AttendeeListViewController.swift
//  RedHatScanner
//
//  Created by Ted Jones - Red Hat on 12/6/17.
//

import UIKit

class AttendeeListViewController: UIViewController {
    
    var attendees = [Attendee]()
    
    @IBOutlet weak var eventButton: UIBarButtonItem!
    
    var scannedCode:String? = ""
    
    // Table view cells are reused and should be dequeued using     a cell identifier.
    let cellIdentifier = "AttendeeListViewCell"

   
    override func viewDidLoad() {
        super.viewDidLoad()
    
        navigationItem.title = "Attendees"
        
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false
        
        // Load the sample data.
        loadSampleAttendees()
        
//        if (!(scannedCode?.isEmpty)!){
//            self.showCode(scannedCode!)
//        }
//
        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        //self.navigationItem.rightBarButtonItem = self.editButtonItem
    }
    
//    func showCode(_ code: String) {
//
//       //  create the alert
//        let alert = UIAlertController(title: "Scanned value", message: code, preferredStyle: UIAlertControllerStyle.alert)
//
//        // add an action (button)
//        alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
//
//        // show the alert
//        self.present(alert, animated: true, completion: nil)
//
//    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    
    @IBAction func eventsButtonPushed(_ sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }
    

//    // MARK: - Table view data source
//
//    override func numberOfSections(in tableView: UITableView) -> Int {
//        // #warning Incomplete implementation, return the number of sections
//        return 1
//    }
//
//    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        return attendees.count
//    }
//
//
//    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//
//        let cell = tableView.dequeueReusableCell(withIdentifier: self.cellIdentifier, for: indexPath) as! AttendeeListViewCell
//
//        // Fetches the appropriate meal for the data source layout.
//        let attendee = attendees[indexPath.row]
//
//        cell.name?.text = attendee.attendeeFirstName + " " + attendee.attendeeLastName
//        cell.company?.text = attendee.company
//
//        return cell
//    }
//
//    /*
//    // Override to support conditional editing of the table view.
//    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
//        // Return false if you do not want the specified item to be editable.
//        return true
//    }
//    */
//
//    /*
//    // Override to support editing the table view.
//    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
//        if editingStyle == .delete {
//            // Delete the row from the data source
//            tableView.deleteRows(at: [indexPath], with: .fade)
//        } else if editingStyle == .insert {
//            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
//        }
//    }
//    */
//
//    /*
//    // Override to support rearranging the table view.
//    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {
//
//    }
//    */
//
//    /*
//    // Override to support conditional rearranging of the table view.
//    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
//        // Return false if you do not want the item to be re-orderable.
//        return true
//    }
//    */
//
//    /*
//    // MARK: - Navigation
//
//    // In a storyboard-based application, you will often want to do a little preparation before navigation
//    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
//        // Get the new view controller using segue.destinationViewController.
//        // Pass the selected object to the new view controller.
//    }
//    */
    
    //MARK: Private Methods
    
    private func loadSampleAttendees() {
        

        guard let attendee1 = Attendee(attendeeFirstName: "Bugs", attendeeLastName: "Bunny", company: "Looney Tunes") else
        {
            fatalError("Unable to instantiate attendee1")
        }
        
        guard let attendee2 = Attendee(attendeeFirstName: "Joe", attendeeLastName: "Magraine", company: "St. Louis Cardinals") else
        {
            fatalError("Unable to instantiate attendee2")
        }

        guard let attendee3 = Attendee(attendeeFirstName: "Mary", attendeeLastName: "Poppins", company: "Nanny, Inc.") else
        {
            fatalError("Unable to instantiate attendee3")
        }
        
        attendees += [attendee1, attendee2, attendee3]
        
        if (self.scannedCode?.isEmpty)!{
            
        } else{
            guard let attendee4 = Attendee(attendeeFirstName: self.scannedCode!, attendeeLastName: "Scanned", company: "Scanned, Inc.") else
            {
                fatalError("Unable to instantiate attendee3")
            }
            attendees += [attendee4]
        }
    }

}

// MARK: UITableViewDelegate extension
extension AttendeeListViewController: UITableViewDelegate  {
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return 25
    }
    
}

// MARK: UITableViewDataSource extension
extension AttendeeListViewController: UITableViewDataSource  {

    
            func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
                return attendees.count
            }
    
    
            func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
                let cell = tableView.dequeueReusableCell(withIdentifier: self.cellIdentifier, for: indexPath) as! AttendeeListViewCell
        
                // Fetches the appropriate meal for the data source layout.
                let attendee = attendees[indexPath.row]
        
                cell.name?.text = attendee.attendeeFirstName + " " + attendee.attendeeLastName
                cell.company?.text = attendee.company
        
                return cell
            }
    
}
