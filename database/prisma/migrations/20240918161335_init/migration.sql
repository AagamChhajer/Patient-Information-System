-- CreateTable
CREATE TABLE "Patients" (
    "patient_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("patient_id")
);

-- CreateTable
CREATE TABLE "Doctors" (
    "doctor_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("doctor_id")
);

-- CreateTable
CREATE TABLE "Departments" (
    "department_id" SERIAL NOT NULL,
    "department_name" TEXT NOT NULL,

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "appointment_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "reason_for_visit" TEXT NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("appointment_id")
);

-- CreateTable
CREATE TABLE "Rooms" (
    "room_id" SERIAL NOT NULL,
    "room_number" TEXT NOT NULL,
    "room_type" TEXT NOT NULL,
    "availability_status" BOOLEAN NOT NULL,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "history_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "treatment" TEXT NOT NULL,
    "treatment_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "Diagnosis" (
    "diagnosis_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "diagnosis_description" TEXT NOT NULL,
    "diagnosis_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("diagnosis_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "medication_id" SERIAL NOT NULL,
    "medication_name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "side_effects" TEXT NOT NULL,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("medication_id")
);

-- CreateTable
CREATE TABLE "Treatments" (
    "treatment_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "medication_id" INTEGER NOT NULL,
    "treatment_description" TEXT NOT NULL,
    "treatment_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Treatments_pkey" PRIMARY KEY ("treatment_id")
);

-- CreateTable
CREATE TABLE "Insurance" (
    "insurance_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "provider_name" TEXT NOT NULL,
    "policy_number" TEXT NOT NULL,
    "coverage_amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("insurance_id")
);

-- CreateTable
CREATE TABLE "LabTests" (
    "test_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "test_name" TEXT NOT NULL,
    "test_result" TEXT NOT NULL,
    "test_date" TIMESTAMP(3) NOT NULL,
    "doctor_id" INTEGER NOT NULL,

    CONSTRAINT "LabTests_pkey" PRIMARY KEY ("test_id")
);

-- CreateTable                 
CREATE TABLE "Bills" (
    "bill_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "billing_date" TIMESTAMP(3) NOT NULL,
    "insurance_covered" BOOLEAN NOT NULL,
    "amount_paid" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bills_pkey" PRIMARY KEY ("bill_id")
);

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Departments"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnosis" ADD CONSTRAINT "Diagnosis_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treatments" ADD CONSTRAINT "Treatments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treatments" ADD CONSTRAINT "Treatments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treatments" ADD CONSTRAINT "Treatments_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "Medications"("medication_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTests" ADD CONSTRAINT "LabTests_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTests" ADD CONSTRAINT "LabTests_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;
