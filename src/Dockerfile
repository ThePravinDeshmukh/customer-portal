#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

FROM node:lts-buster-slim AS node_base
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
COPY --from=node_base . .

WORKDIR /src
RUN npm -v
RUN dir
COPY ["CustomerPortal/CustomerPortal.csproj", "CustomerPortal/"]
COPY ["CustomerPortal.BusinessLogic/CustomerPortal.BusinessLogic.csproj", "CustomerPortal.BusinessLogic/"]
COPY ["CustomerPortal.Models/CustomerPortal.Models.csproj", "CustomerPortal.Models/"]
COPY ["CustomerPortal.ExternalServices/CustomerPortal.ExternalServices.csproj", "CustomerPortal.ExternalServices/"]
RUN dir
RUN dotnet restore "CustomerPortal/CustomerPortal.csproj"
COPY . .
WORKDIR "/src/CustomerPortal"
RUN dotnet build "CustomerPortal.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CustomerPortal.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CustomerPortal.dll"]