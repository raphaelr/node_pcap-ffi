Opening and closing devices
===========================

## pcap.openLive
    var handle = pcap.openLive(name, [snaplen], [promiscuous], [timeout]);

Opens a live capture from a physical network interface.

* **`name`**: Name of the device to open, e.g. `eth0` on GNU/Linux-based systems.
* `snaplen`: Maximum capture length of one packet.  
   Default: `65535`
* `promiscuous`: A truthy value for this parameter enables promicuous mode, i.e.
   the interface will capture all packets, even those addressed to other MAC
   addresses. The effect of this parameter depends on the operating system and type
   of interface used.  
   Default: `false`
* `timeout`: Time to allow the capture driver to capture more packets before sending it
  to the application in one chunk, minimizing CPU usage. A lower value therefore decreases
  latency but increases CPU usage. A value of `0` allows the capture driver to read
  as much packets as it can store in it's buffer before returning.  
  Default: `0`

## pcap.openDead
    var handle = pcap.openDead([linktype], [snaplen]);

Opens a dead capture. Useful only for testing purposes.

* `linktype`: Data-Link type of the device, see `bpf.h` in your libpcap distribution.  
   Default: `1` (Ethernet)
* `snaplen`: Maximum capture length of one packet.  
   Default: `65535`

## handle.close
    handle.close();

Closes a handle returned by the `pcap.open*` functions. Multiple calls to this function
are ignored.
