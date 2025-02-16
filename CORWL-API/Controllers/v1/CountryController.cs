﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using CORWL_API.CustomValidation;
using CORWL_API.Extension;
using CORWL_API.Model.DTO;
using CORWL_API.Model.Entities;
using CORWL_API.Unit_Of_Work;
using Bogus;
using CORWL_API.DbContext;
using Microsoft.EntityFrameworkCore;

namespace CORWL_API.Controllers.v1
{
    [Authorize("ManagementRole")]
    public class CountryController : BaseApiController
    {
        private readonly IUnitOfWork _uot;
        private readonly IMapper _mapper;

        public CountryController(IUnitOfWork uot, IMapper mapper)
        {
            _uot = uot;
            _mapper = mapper;
        }

        [HttpGet("GetAllCountries")]
        public async Task<IActionResult> GetAllCountries()
        {
            return Ok(await _uot.CountryRepository.GetAllCountry());
        }

        [HttpGet("GetCountryDropdown")]
        public async Task<IActionResult> GetCountryDropdown()
        {
            return Ok(await _uot.CountryRepository.GetCountryDropdown());
        }

        [HttpPost("add-country")]
        public async Task<ActionResult<CountryDto>> AddCountry(CountryDto country)
        {
            var countryData = _mapper.Map<Country>(country);

            var checkCountry = await _uot.CountryRepository.GetCountryByName(countryData.CountryName.ToLower());

            if (checkCountry != null) return BadRequest("Country Already Exist");

            countryData.CountryName = countryData.CountryName.ToLower();
            countryData.CreatedBy = int.Parse(User.GetUserId());

            _uot.CountryRepository.AddCountry(countryData);

            if (await _uot.Complete())
                return Ok(new { Message = "Country added successfully", data = countryData });

            return BadRequest("Failed To Add Country");
        }

        [HttpPut("update-country")]
        public async Task<ActionResult> UpdateCountry(CountryDto countryDto)
        {
            countryDto.UpdatedBy = int.Parse(User.GetUserId());

            var res = await _uot.CountryRepository.UpdateCountry(countryDto);

            if (res.Status == false) return BadRequest(res.Message);

            if (await _uot.Complete()) return Ok(new { Message = "Country updated successfully", res.Data });

            return BadRequest(ValidationMsg.SomethingWrong("updating country"));
        }


    }
}
