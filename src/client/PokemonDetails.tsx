import React from "react";
import * as Types from "./types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PokemonDetails = (props: Types.PokemonDetailsProps) => {
  return (
    <>
      <main className="container my-5 border">
        <div className="fs-2">
          The Original form and Shiny are forms common to all pokemon. A large number of pokemon have forms in common, such as 'Pink',
          'Alter', and 'Ashen' form. There are about 12 or so of these common form groups. Certain pokemon have forms unique to them, such
          as Aegislash, who can have the 'Shield' and 'Blade' form. Aegislash is also in the group of pokemon who can have the 'alter' form.{" "}
          <br></br>
          <br></br>I want a pokemon's box to come up and set the buttons based on the database data. Then I can click a radio button to
          indicate I have that form, and then hit submit to save the data. I should be able to press more than 1 button if I happened to
          catch 2 forms and want to do it in 1 step.
          <br></br>
          <br></br>So for example, Aegislash can be Original and Shiny, (common to all pokemon), Alter (common to a group of pokemon), and
          Shield and Blade (unique to Aegislash). Aegislash's options would look like this:
        </div>
        <div className="d-flex flex-wrap">
          <div className="border col-md-2 mx-1 my-2">
            <FormControl>
              <FormLabel id="caught">Caught - on all pokemon</FormLabel>
              <RadioGroup aria-labelledby="caught" defaultValue="No" name="radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="border col-md-2 mx-1 my-2">
            <FormControl>
              <FormLabel id="caught">Shiny - on all pokemon</FormLabel>
              <RadioGroup defaultValue="No" name="radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="border col-md-2 mx-1 my-2">
            <FormControl>
              <FormLabel id="caught">Alter - on a group of pokemon</FormLabel>
              <RadioGroup defaultValue="No" name="radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="border col-md-2 mx-1 my-2">
            <FormControl>
              <FormLabel id="caught">Shield - on a particular pokemon</FormLabel>
              <RadioGroup defaultValue="No" name="radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="border col-md-2 mx-1 my-2">
            <FormControl>
              <FormLabel id="caught">Blade - on a particular pokemon</FormLabel>
              <RadioGroup defaultValue="No" name="radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <button className="btn btn-primary my-2">Update</button>
      </main>
    </>
  );
};

export default PokemonDetails;
