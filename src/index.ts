import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



async function main() {
  // Insert Departments
  const departments = await prisma.departments.createMany({
    data: [
      { department_name: "Cardiology" },
      { department_name: "Neurology" },
      { department_name: "Dermatology" },
      { department_name: "Orthopedics" },
      { department_name: "Pediatrics" }
    ]
  });
  

  // Insert Patients
  const patients = await prisma.patients.createMany({
    data: [
      { first_name: "John", last_name: "Doe", date_of_birth: new Date('1980-01-01'), gender: "Male", contact_number: "1234567890", address: "123 Main St" },
      { first_name: "Jane", last_name: "Smith", date_of_birth: new Date('1990-02-02'), gender: "Female", contact_number: "9876543210", address: "456 Oak Ave" },
      { first_name: "Mark", last_name: "Johnson", date_of_birth: new Date('1975-03-03'), gender: "Male", contact_number: "4567891234", address: "789 Pine Rd" },
      { first_name: "Emily", last_name: "Brown", date_of_birth: new Date('1995-04-04'), gender: "Female", contact_number: "6543219876", address: "321 Cedar St" },
      { first_name: "Michael", last_name: "Williams", date_of_birth: new Date('1985-05-05'), gender: "Male", contact_number: "3216549870", address: "654 Spruce Ln" }
    ]
  });
  

  // Insert Doctors
  const doctors = await prisma.doctors.createMany({
    data: [
      { first_name: "Dr. Sarah", last_name: "Wilson", specialty: "Cardiology", contact_number: "5551234567", department_id: 1 },
      { first_name: "Dr. David", last_name: "Lee", specialty: "Neurology", contact_number: "5559876543", department_id: 2 },
      { first_name: "Dr. Alice", last_name: "Kim", specialty: "Dermatology", contact_number: "5554567890", department_id: 3 },
      { first_name: "Dr. Robert", last_name: "Chen", specialty: "Orthopedics", contact_number: "5556543210", department_id: 1 },
      { first_name: "Dr. Laura", last_name: "Martinez", specialty: "Pediatrics", contact_number: "5553214567", department_id: 2 }
    ]
  });
  

  // Insert Rooms
  const rooms = await prisma.rooms.createMany({
    data: [
      { room_number: "101", room_type: "Single", availability_status: true },
      { room_number: "102", room_type: "Double", availability_status: false },
      { room_number: "103", room_type: "Suite", availability_status: true },
      { room_number: "104", room_type: "ICU", availability_status: false },
      { room_number: "105", room_type: "Single", availability_status: true }
    ]
  });
  

  // Insert Appointments
  const appointments = await prisma.appointments.createMany({
    data: [
      { patient_id: 1, doctor_id: 1, appointment_date: new Date('2024-09-01'), reason_for_visit: "Chest Pain" },
      { patient_id: 2, doctor_id: 2, appointment_date: new Date('2024-09-02'), reason_for_visit: "Migraine" },
      { patient_id: 3, doctor_id: 3, appointment_date: new Date('2024-09-03'), reason_for_visit: "Rash" },
      { patient_id: 4, doctor_id: 4, appointment_date: new Date('2024-09-04'), reason_for_visit: "Knee Pain" },
      { patient_id: 5, doctor_id: 5, appointment_date: new Date('2024-09-05'), reason_for_visit: "Fever" }
    ]
  });
  

  // Insert Medical History
  const medicalHistory = await prisma.medicalHistory.createMany({
    data: [
      { patient_id: 1, treatment: "Angioplasty", treatment_date: new Date('2024-01-15') },
      { patient_id: 2, treatment: "Migraine Management", treatment_date: new Date('2024-02-20') },
      { patient_id: 3, treatment: "Skin Allergy", treatment_date: new Date('2024-03-05') },
      { patient_id: 4, treatment: "Knee Surgery", treatment_date: new Date('2024-04-10') },
      { patient_id: 5, treatment: "Flu Vaccination", treatment_date: new Date('2024-05-12') }
    ]
  });
  

  // Insert Diagnosis
  const diagnosis = await prisma.diagnosis.createMany({
    data: [
      { patient_id: 1, doctor_id: 1, diagnosis_description: "Coronary Artery Disease", diagnosis_date: new Date('2024-01-01') },
      { patient_id: 2, doctor_id: 2, diagnosis_description: "Chronic Migraine", diagnosis_date: new Date('2024-02-01') },
      { patient_id: 3, doctor_id: 3, diagnosis_description: "Atopic Dermatitis", diagnosis_date: new Date('2024-03-01') },
      { patient_id: 4, doctor_id: 4, diagnosis_description: "Arthritis", diagnosis_date: new Date('2024-04-01') },
      { patient_id: 5, doctor_id: 5, diagnosis_description: "Influenza", diagnosis_date: new Date('2024-05-01') }
    ]
  });
  

  // Insert Medications
  const medications = await prisma.medications.createMany({
    data: [
      { medication_name: "Paracetamol", dosage: "500mg", side_effects: "Nausea" },
      { medication_name: "Ibuprofen", dosage: "400mg", side_effects: "Stomach Pain" },
      { medication_name: "Amoxicillin", dosage: "250mg", side_effects: "Diarrhea" },
      { medication_name: "Metformin", dosage: "1000mg", side_effects: "Dizziness" },
      { medication_name: "Aspirin", dosage: "300mg", side_effects: "Heartburn" }
    ]
  });
  

  // Insert Treatments
  const treatments = await prisma.treatments.createMany({
    data: [
      { patient_id: 1, doctor_id: 1, medication_id: 1, treatment_description: "Pain Relief", treatment_date: new Date('2024-09-01') },
      { patient_id: 2, doctor_id: 2, medication_id: 2, treatment_description: "Anti-inflammatory", treatment_date: new Date('2024-09-02') },
      { patient_id: 3, doctor_id: 3, medication_id: 3, treatment_description: "Antibiotic", treatment_date: new Date('2024-09-03') },
      { patient_id: 4, doctor_id: 4, medication_id: 4, treatment_description: "Blood Sugar Control", treatment_date: new Date('2024-09-04') },
      { patient_id: 5, doctor_id: 5, medication_id: 5, treatment_description: "Fever Reduction", treatment_date: new Date('2024-09-05') }
    ]
  });
  

  // Insert Insurance
  const insurance = await prisma.insurance.createMany({
    data: [
      { patient_id: 1, provider_name: "HealthFirst", policy_number: "H123456", coverage_amount: 5000 },
      { patient_id: 2, provider_name: "MediCare", policy_number: "M234567", coverage_amount: 6000 },
      { patient_id: 3, provider_name: "WellCare", policy_number: "W345678", coverage_amount: 7000 },
      { patient_id: 4, provider_name: "CarePlus", policy_number: "C456789", coverage_amount: 8000 },
      { patient_id: 5, provider_name: "UnitedHealth", policy_number: "U567890", coverage_amount: 9000 }
    ]
  });
  

  // Insert Lab Tests
  const labTests = await prisma.labTests.createMany({
    data: [
      { patient_id: 1, test_name: "Blood Test", test_result: "Normal", test_date: new Date('2024-06-01'), doctor_id: 1 },
      { patient_id: 2, test_name: "CT Scan", test_result: "Normal", test_date: new Date('2024-06-02'), doctor_id: 2 },
      { patient_id: 3, test_name: "Skin Biopsy", test_result: "Benign", test_date: new Date('2024-06-03'), doctor_id: 3 },
      { patient_id: 4, test_name: "X-ray", test_result: "Fracture Detected", test_date: new Date('2024-06-04'), doctor_id: 4 },
      { patient_id: 5, test_name: "MRI", test_result: "Clear", test_date: new Date('2024-06-05'), doctor_id: 5 }
    ]
  });
  

  // Insert Billing
  const billing = await prisma.bills.createMany({
    data: [
      { patient_id: 1, total_amount: 1000.50, billing_date: new Date('2024-07-01'), insurance_covered: true, amount_paid: 200.50 },
      { patient_id: 2, total_amount: 1500.75, billing_date: new Date('2024-07-02'), insurance_covered: false, amount_paid: 1500.75 },
      { patient_id: 3, total_amount: 1200.00, billing_date: new Date('2024-07-03'), insurance_covered: true, amount_paid: 300.00 },
      { patient_id: 4, total_amount: 2000.25, billing_date: new Date('2024-07-04'), insurance_covered: false, amount_paid: 2000.25 },
      { patient_id: 5, total_amount: 2500.50, billing_date: new Date('2024-07-05'), insurance_covered: true, amount_paid: 500.50 }
    ]
  });
  

  console.log('Data inserted successfully');
}

main()