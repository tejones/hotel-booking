package com.redhat.raffle.service;

import com.redhat.raffle.bean.Attendee;

public interface ScannerService {
    public Attendee parseScannedValue(String scannedValue);
}