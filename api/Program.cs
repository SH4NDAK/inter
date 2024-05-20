var builder = WebApplication.CreateBuilder(args);

// adicionando middleware pro CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyAllowSpecificOrigins",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost") // liberando todas as requisições vindas de localhost
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowAnyOrigin();
                      });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("MyAllowSpecificOrigins");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    // Desabilitar a verificação do certificado SSL em ambiente de desenvolvimento
    app.UseDeveloperExceptionPage();
    System.Net.ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
