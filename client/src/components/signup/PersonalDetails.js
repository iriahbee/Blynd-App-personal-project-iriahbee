import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ThemeButton from "../theme/button";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import csc from "country-state-city";
import axios from "axios";
import Swal from "sweetalert2";

const StyledContainer = styled.div``;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const StyledGroup = styled.div``;

const StyleSelect = styled(Select)`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const PersonalDetails = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      state: "",
      city: "",
      gender: "",
      job: "",
    },
  });

  const options = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Other", label: "Other" },
  ];

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const result = await csc.getAllCountries();
        let allCountries = [];
        allCountries = result?.map(({ isoCode, name }) => ({
          isoCode,
          name,
        }));
        const [{ isoCode: firstCountry } = {}] = allCountries;
        setCountries(allCountries);
        setSelectedCountry(firstCountry);
        setIsLoading(false);
      } catch (error) {
        setCountries([]);
        setIsLoading(false);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getStates = async () => {
      try {
        const result = await csc.getStatesOfCountry(selectedCountry);
        let allStates = [];
        allStates = result?.map(({ isoCode, name }) => ({
          isoCode,
          name,
        }));
        const [{ isoCode: firstState = "" } = {}] = allStates;
        setCities([]);
        setSelectedCity("");
        setStates(allStates);
        setSelectedState(firstState);
      } catch (error) {
        setStates([]);
        setCities([]);
        setSelectedCity("");
      }
    };

    getStates();
  }, [selectedCountry]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const result = await csc.getCitiesOfState(
          selectedCountry,
          selectedState
        );
        let allCities = [];
        allCities = result?.map(({ name }) => ({
          name,
        }));
        const [{ name: firstCity = "" } = {}] = allCities;
        setCities(allCities);
        setSelectedCity(firstCity);
      } catch (error) {
        setCities([]);
      }
    };

    getCities();
  }, [selectedCountry, selectedState]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = props;
      const updatedData = {
        country: countries.find(
          (country) => country.isoCode === selectedCountry
        )?.name,
        state:
          states.find((state) => state.isoCode === selectedState)?.name || "",
        city: selectedCity,
      };

      await axios.post(`/signup`, {
        ...user,
        ...updatedData,
      });
      Swal.fire("Awesome!", "Welcome to Blynd!", "success").then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          props.resetUser();
          props.history.push("/");
        }
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log("error", error.response.data);
      }
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <motion.div
          className="col-md-6 offset-md-3"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 150 }}
        >
          <StyledGroup>
            {isLoading && (
              <p className="loading">Loading countries. Please wait...</p>
            )}
            <label>Country:</label>
            <StyledInput
              as="select"
              name="country"
              {...register("country", {
                required: true,
                message: "Country is required.",
              })}
              value={selectedCountry}
              onChange={(event) => setSelectedCountry(event.target.value)}
            >
              {countries.map(({ isoCode, name }) => (
                <option value={isoCode} key={isoCode}>
                  {name}
                </option>
              ))}
            </StyledInput>
            {errors.country && <p>{errors.country.message}</p>}
          </StyledGroup>

          <label>State:</label>
          <StyledInput
            as="select"
            name="state"
            {...register("state", {
              required: true,
              message: "State is required.",
            })}
            value={selectedState}
            onChange={(event) => setSelectedState(event.target.value)}
          >
            {states.length > 0 ? (
              states.map(({ isoCode, name }) => (
                <option value={isoCode} key={isoCode}>
                  {name}
                </option>
              ))
            ) : (
              <option value="" key="">
                No state found
              </option>
            )}
          </StyledInput>
          {errors.state && <p>{errors.state.message}</p>}

          <label>City:</label>
          <StyledInput
            as="select"
            name="city"
            {...register("city", {
              required: true,
              message: "City is required.",
            })}
            value={selectedCity}
            onChange={(event) => setSelectedCity(event.target.value)}
          >
            {cities.length > 0 ? (
              cities.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))
            ) : (
              <option value="">No cities found</option>
            )}
          </StyledInput>
          {errors.city && <p>{errors.city.message}</p>}

          <label>Select your Gender:</label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <StyleSelect
                {...field}
                options={options}
                {...register("gender", {
                  required: true,
                  message: "Gender is required.",
                })}
              />
            )}
          />
          {errors.gender && <span>{errors.gender.message}</span>}

          <label>Profession:</label>
          <StyledInput
            type="text"
            name="job"
            placeholder="Enter your Profession"
            {...register("job", {
              required: true,
              pattern: {
                value: /^[a-z A-Z]+$/,
                message: "Profession should contain only characters.",
              },
            })}
          />
          {errors.profession && <p>{errors.profession.message}</p>}

          <ThemeButton type="submit">Next</ThemeButton>
        </motion.div>
      </StyledForm>
    </StyledContainer>
  );
};

export default PersonalDetails;
