using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class AgendamentoController : ControllerBase
{

    [HttpGet]
    public string Get()
    {
        return "oi";
    }
}
