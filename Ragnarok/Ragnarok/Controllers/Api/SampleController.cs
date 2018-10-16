using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ragnarok.Controllers.Api
{    
    public class SampleController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetData()
        {
            return Ok("Hello world!!!");
        }        
    }
}