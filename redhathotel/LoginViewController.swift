//
//  LoginViewController.swift
//  redhathotel
//
//  Created by Ted Jones - Red Hat on 4/11/18.
//  Copyright © 2018 Ted Jones - Red Hat. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {

    @IBOutlet weak var username: UITextField!
    
    @IBOutlet weak var password: UITextField!
    
    @IBOutlet weak var signinButton: UIButton!
    
    var userId: Int = 0
    
    var email = String()
    
    var country = String()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    @IBAction func signinButtonSelected(_ sender: Any) {
        
        let userNameText = username.text
        let passwordText = password.text
        
        if (userNameText?.isEmpty)!
        {
            displayDialog(title: "User name is required", message: "The user name cannot be blank.")
            return
        }
        
        if (passwordText?.isEmpty)!
        {
            displayDialog(title: "Password is required", message: "The password cannot be blank.")
            return
        }
        
        //Create Activity Indicator
        let loginActivityMonitor = UIActivityIndicatorView(activityIndicatorStyle: UIActivityIndicatorViewStyle.whiteLarge)
        
        // Position Activity Indicator in the center of the main view
        loginActivityMonitor.center = view.center
        
        // If needed, you can prevent Acivity Indicator from hiding when stopAnimating() is called
        loginActivityMonitor.hidesWhenStopped = false
        
        // Start Activity Indicator
        loginActivityMonitor.startAnimating()
        
        view.addSubview( loginActivityMonitor )
        
        // Define base URL
        let baseUrl = "http://customer-service-hotelbooking.apps.46.4.112.21.xip.io/customer/authenticate"
        // Add parameter
        let urlWithParams = baseUrl + "?email=\(userNameText!)"
        // Create URL Ibject
        let myUrl = URL(string: urlWithParams);
        
        // Create URL Request
        var request = URLRequest(url:myUrl!);
        
        // Set request HTTP method to GET. It could be POST as well
        request.httpMethod = "GET"
        
        // If needed you could add Authorization header value
        // Add Basic Authorization
        /*
         let username = "myUserName"
         let password = "myPassword"
         let loginString = NSString(format: "%@:%@", username, password)
         let loginData: NSData = loginString.dataUsingEncoding(NSUTF8StringEncoding)!
         let base64LoginString = loginData.base64EncodedStringWithOptions(NSDataBase64EncodingOptions())
         request.setValue(base64LoginString, forHTTPHeaderField: "Authorization")
         */
        
        // Or it could be a single Authorization Token value
        //request.addValue("Token token=884288bae150b9f2f68d8dc3a932071d", forHTTPHeaderField: "Authorization")
        
        // Excute HTTP Request
        let task = URLSession.shared.dataTask(with: request) {
            data, response, error in
            
            // Check for error
            if error != nil
            {
                self.removeActivityIndicator( activityIndicator: loginActivityMonitor )
                self.displayDialog(title: "Error", message: "User name or password incorrect. Please try again.")
                return
            }
            
            // Print out response string
            let responseString = NSString(data: data!, encoding: String.Encoding.utf8.rawValue)
            if (responseString != nil) {
                self.removeActivityIndicator( activityIndicator: loginActivityMonitor )
                print("password failed")
                self.displayDialog(title: "Error", message: "User name or password incorrect. Please try again.")
            }
            
            // Convert server json response to NSDictionary
            do {
                if let convertedJsonIntoDict = try JSONSerialization.jsonObject(with: data!, options: []) as? NSDictionary {
                    
                    // Print out dictionary
                    print(convertedJsonIntoDict)
                    
                    // Get value by key
                    self.userId = (convertedJsonIntoDict["id"] as? Int)!
                    self.country = (convertedJsonIntoDict["country"] as? String)!
                    self.email = (convertedJsonIntoDict["email"] as? String)!
                    self.removeActivityIndicator( activityIndicator: loginActivityMonitor )
                    self.nextScreen()
                }
            } catch let error as NSError {
                self.displayDialog(title: "Error", message: "User name or password incorrect. Please try again.")
                self.removeActivityIndicator( activityIndicator: loginActivityMonitor )
                print(error.localizedDescription)
            }
            
        }
        
        task.resume()

    }
    
    func displayDialog(title: String, message: String) -> Void {
        
        DispatchQueue.main.async {
            let alertController = UIAlertController(title: title, message: message, preferredStyle: .alert)
            
            let OkAction = UIAlertAction(title: "Ok", style: .default)
            { (action:UIAlertAction!) in
                DispatchQueue.main.async
                    {
                        self.dismiss(animated: true, completion: nil)
                        
                }
            }
            
            alertController.addAction(OkAction)
            self.present(alertController, animated: true, completion:  nil)
        }
    }
    
    func removeActivityIndicator(activityIndicator: UIActivityIndicatorView)
    {
        DispatchQueue.main.async {
            activityIndicator.stopAnimating()
            activityIndicator.removeFromSuperview()
        }
    }
    
    func nextScreen(activityIndicator: UIActivityIndicatorView) {
        
        let appDelegate = UIApplication.shared.delegate

        DispatchQueue.main.async {
            if PrefMgr.shared.askForAcceptance {
            let acceptanceController = self.storyboard?.instantiateViewController( withIdentifier: AcceptanceController.storyboardId )
            appDelegate?.window??.rootViewController = acceptanceController
            } else {
            let reservationsPage = self.storyboard?.instantiateViewController(withIdentifier: "ReservationsViewController") as! ReservationsViewController
            
            // replace sign in page
            appDelegate?.window??.rootViewController = reservationsPage
            }
        }
    }
}
