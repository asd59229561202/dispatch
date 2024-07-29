export const sample_user = [
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'Jane@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: false,
  },
];
export const sample_deliverMessage: any[] = [
  {
    "id": 1,
    "sender": "John Doe",
    "email": "john.doe@example.com",
    "receiver": "Jane Smith",
    "origin": "New York, NY",
    "destination": "Los Angeles, CA",
    "quantity": 1,
    "weight": "10",
    "length": "30",
    "width": "20",
    "height": "15",
    "material": "Plastic",
    "status": "運送中",
    "truckingNumber": "AB123456789US",
    "createdAt": "2024-07-12T10:00:00Z",
    "departureDateStart": "2024-07-12",
    "departureDateEnd": "2024-07-15"
  },
  {
    "id": 2,
    "sender": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "receiver": "Bob Brown",
    "origin": "Chicago, IL",
    "destination": "Houston, TX",
    "quantity": 2,
    "weight": "5",
    "length": "25",
    "width": "15",
    "height": "10",
    "material": "Metal",
    "status": "在倉庫",
    "createdAt": "2024-07-11T15:30:00Z",
    
  },
  {
    "id": 3,
    "sender": "Charlie Davis",
    "email": "charlie.davis@example.com",
    "receiver": "Diana Evans",
    "origin": "San Francisco, CA",
    "destination": "Seattle, WA",
    "quantity": 3,
    "weight": "8",
    "length": "40",
    "width": "30",
    "height": "20",
    "material": "Wood",
    "status": "在倉庫",
    "createdAt": "2024-07-10T08:45:00Z",
    
  },
  {
    "id": 4,
    "sender": "Eve Foster",
    "email": "eve.foster@example.com",
    "receiver": "Frank Green",
    "origin": "Miami, FL",
    "destination": "Orlando, FL",
    "quantity": 4,
    "weight": "12",
    "length": "35",
    "width": "25",
    "height": "15",
    "material": "Glass",
    "status": "運送中",
    "truckingNumber": "GH987654321US",
    "createdAt": "2024-07-09T18:20:00Z",
    "departureDateStart": "2024-07-09",
    "departureDateEnd": "2024-07-10"
  },
  {
    "id": 5,
    "sender": "Grace Hall",
    "email": "grace.hall@example.com",
    "receiver": "Henry King",
    "origin": "Boston, MA",
    "destination": "Philadelphia, PA",
    "quantity": 5,
    "weight": "7",
    "length": "28",
    "width": "18",
    "height": "12",
    "material": "Paper",
    "status": "運送中",
    "truckingNumber": "IJ123456789US",
    "createdAt": "2024-07-08T12:10:00Z",
    "departureDateStart": "2024-07-08",
    "departureDateEnd": "2024-07-09"
  },
  {
    "id": 6,
    "sender": "Ivy Lee",
    "email": "ivy.lee@example.com",
    "receiver": "Jack Moore",
    "origin": "Dallas, TX",
    "destination": "Austin, TX",
    "quantity": 6,
    "weight": "9",
    "length": "32",
    "width": "22",
    "height": "16",
    "material": "Fabric",
    "status": "運送中",
    "truckingNumber": "KL987654321US",
    "createdAt": "2024-07-07T09:30:00Z",
    "departureDateStart": "2024-07-07",
    "departureDateEnd": "2024-07-08"
  },
  {
    "id": 7,
    "sender": "Kyle Nelson",
    "email": "kyle.nelson@example.com",
    "receiver": "Lily Owens",
    "origin": "Phoenix, AZ",
    "destination": "Denver, CO",
    "quantity": 7,
    "weight": "11",
    "length": "37",
    "width": "27",
    "height": "17",
    "material": "Plastic",
    "status": "運送中",
    "truckingNumber": "MN123456789US",
    "createdAt": "2024-07-06T14:45:00Z",
    "departureDateStart": "2024-07-06",
    "departureDateEnd": "2024-07-07"
  },
  {
    "id": 8,
    "sender": "Mia Parker",
    "email": "mia.parker@example.com",
    "receiver": "Noah Quinn",
    "origin": "Las Vegas, NV",
    "destination": "Salt Lake City, UT",
    "quantity": 8,
    "weight": "6",
    "length": "29",
    "width": "19",
    "height": "13",
    "material": "Metal",
    "status": "在倉庫",
    "createdAt": "2024-07-05T11:20:00Z",
    
  },
  {
    "id": 9,
    "sender": "Olivia Roberts",
    "email": "olivia.roberts@example.com",
    "receiver": "Paul Scott",
    "origin": "San Diego, CA",
    "destination": "Portland, OR",
    "quantity": 9,
    "weight": "10",
    "length": "31",
    "width": "21",
    "height": "14",
    "material": "Wood",
    "status": "在倉庫",
    "createdAt": "2024-07-04T16:00:00Z",
    
  },
  {
    "id": 10,
    "sender": "Quinn Taylor",
    "email": "quinn.taylor@example.com",
    "receiver": "Ryan White",
    "origin": "Atlanta, GA",
    "destination": "Charlotte, NC",
    "quantity": 10,
    "weight": "8",
    "length": "33",
    "width": "23",
    "height": "15",
    "material": "Glass",
    "status": "在倉庫",
    "createdAt": "2024-07-03T20:30:00Z",
    
  }
];


export const sample_truck: any[] = [
  {
    truckingNumber: 'AB123456789US',
    isLoading: true,
    driver: 'John Doe',
    length: 1500,
    width: 250,
    height: 300,
    cargoWeight: 2000,
    loadingStartTime: new Date('2024-07-12T10:00:00Z')
  },
  {
    truckingNumber: 'CD987654321US',
    isLoading: false,
    driver: 'Alice Johnson',
    length: 1600,
    width: 250,
    height: 280,
    cargoWeight: 1800
  },
  {
    truckingNumber: 'EF123456789US',
    isLoading: false,
    driver: 'Charlie Davis',
    length: 1550,
    width: 270,
    height: 290,
    cargoWeight: 1900
  },
  {
    truckingNumber: 'GH987654321US',
    isLoading: true,
    driver: 'Eve Foster',
    length: 1700,
    width: 280,
    height: 300,
    cargoWeight: 2100,
    loadingStartTime: new Date('2024-07-09T18:20:00Z')
  },
  {
    truckingNumber: 'IJ123456789US',
    isLoading: true,
    driver: 'Grace Hall',
    length: 1800,
    width: 290,
    height: 250,
    cargoWeight: 2200,
    loadingStartTime: new Date('2024-07-08T12:10:00Z')
  },
  {
    truckingNumber: 'KL987654321US',
    isLoading: true,
    driver: 'Ivy Lee',
    length: 1900,
    width: 300,
    height: 290,
    cargoWeight: 2300,
    loadingStartTime: new Date('2024-07-07T09:30:00Z')
  },
  {
    truckingNumber: 'MN123456789US',
    isLoading: true,
    driver: 'Kyle Nelson',
    length: 2000,
    width: 300,
    height: 270,
    cargoWeight: 2400,
    loadingStartTime: new Date('2024-07-06T14:45:00Z')
  },
  {
    truckingNumber: 'OP987654321US',
    isLoading: false,
    driver: 'Mia Parker',
    length: 1500,
    width: 300,
    height: 250,
    cargoWeight: 2000
  },
  {
    truckingNumber: 'QR123456789US',
    isLoading: false,
    driver: 'Olivia Roberts',
    length: 1600,
    width: 300,
    height: 280,
    cargoWeight: 2100
  },
  {
    truckingNumber: 'ST987654321US',
    isLoading: false,
    driver: 'Quinn Taylor',
    length: 1700,
    width: 290,
    height: 300,
    cargoWeight: 2200
  }
];
