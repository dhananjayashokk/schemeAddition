import React, { useState } from "react";
import {
  schemeTypes,
  zones,
  states,
  familyCodes,
  brands,
  slabOptions,
  rateOptions,
} from "../../options";
import MultiSelect from "../../components/MultiSelect";
import DatePicker from "../../components/DatePicker";
import ToggleButtons from "../../components/ToggleButton";
import TextFieldInput from "../../components/TextField";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles";

const SchemeAddition = () => {
  const [schemeType, setSchemeType] = useState([]);
  const [zone, setZone] = useState([]);
  const [state, setState] = useState([]);
  const [familyCode, setFamilyCode] = useState([]);
  const [brand, setBrand] = useState([]);
  const [startDate, setStartDate] = useState(dayjs("2022-08-18T21:11:54"));
  const [endDate, setEndDate] = useState(dayjs("2022-08-18T21:11:54"));
  const [slabRate, setSlabRate] = useState([
    {
      slabToggle: "unit-wise",
      minValue: 0,
      maxValue: 0,
      rateToggle: "percentage",
      rateValue: 0,
    },
  ]);

  const handleAddRow = (value, pos) => {
    if (value === "add") {
      setSlabRate([
        ...slabRate,
        {
          slabToggle: "unit-wise",
          minValue: 0,
          maxValue: 0,
          rateToggle: "percentage",
          rateValue: 0,
        },
      ]);
    }
    if (value === "delete") {
      slabRate.splice(pos, 1);
      setSlabRate([...slabRate]);
    }
  };

  return (
    <div>
      <Typography align="center" variant="h5">
        Scheme Addition
      </Typography>
      <div style={styles.inputsContainer}>
        <div style={styles.rowParent}>
          <div style={styles.rowDiv}>
            <label style={styles.labelWidth}>Filters :</label>
            <MultiSelect
              placeholder="Scheme Type"
              state={schemeType}
              setState={setSchemeType}
              options={schemeTypes}
            />
            <MultiSelect
              placeholder="Zone"
              state={zone}
              setState={setZone}
              options={zones}
            />
            <MultiSelect
              placeholder="State"
              state={state}
              setState={setState}
              options={states}
            />
            <MultiSelect
              placeholder="Family Code"
              state={familyCode}
              setState={setFamilyCode}
              options={familyCodes}
            />
            <MultiSelect
              placeholder="Brand"
              state={brand}
              setState={setBrand}
              options={brands}
            />
          </div>
        </div>
        <div style={styles.rowParent}>
          <div style={styles.rowDiv}>
            <label style={styles.labelWidth}>Select Date :</label>
            <DatePicker
              value={startDate}
              setValue={setStartDate}
              label="Start Date"
            />
          </div>
          <div style={styles.rowDiv}>
            <DatePicker
              value={endDate}
              setValue={setEndDate}
              label="End Date"
            />
          </div>
        </div>
        {slabRate.map((row, index) => {
          return (
            <div key={index} style={styles.slabRatesDiv}>
              <div>
                <div style={styles.rowDiv}>
                  <label style={styles.labelWidth}>Slab Toggle :</label>
                  <ToggleButtons
                    setState={setSlabRate}
                    state={slabRate}
                    pos={index}
                    key="slabToggle"
                    options={slabOptions}
                  />
                  <TextFieldInput label="Min value" />
                  <TextFieldInput label="Max value" />
                </div>
                <div style={styles.rowDiv}>
                  <label style={styles.labelWidth}>Rate Toggle :</label>
                  <ToggleButtons
                    state={slabRate}
                    setState={setSlabRate}
                    pos={index}
                    key="rateToggle"
                    options={rateOptions}
                  />
                  <TextFieldInput label="value" />
                </div>
              </div>
              <div style={styles.addDeleteButtons}>
                <Stack spacing={2} direction="row">
                  {index + 1 === slabRate.length && (
                    <Button
                      variant="contained"
                      onClick={() => handleAddRow("add")}
                    >
                      Add
                    </Button>
                  )}
                  {slabRate.length > 1 && (
                    <Button
                      variant="outlined"
                      onClick={() => handleAddRow("delete", index)}
                    >
                      Delete
                    </Button>
                  )}
                </Stack>
              </div>
            </div>
          );
        })}
        <div style={styles.rowParent}>
          <div style={styles.submitDiv}>
            <Button variant="contained">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeAddition;
