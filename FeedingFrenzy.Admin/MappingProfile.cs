namespace FeedingFrenzy.Admin;

using AutoMapper;
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Create mappings between CreditCardDTOs in different namespaces
        CreateMap<FeedingFrenzy.Common.CreditCardDTO, FeedingFrenzy.AuthorizeNetAPI.CreditCardDTO>().ReverseMap();

        // Similarly, map BillingAddressDTO between different namespaces
        CreateMap<FeedingFrenzy.Common.BillingAddressDTO, FeedingFrenzy.AuthorizeNetAPI.BillingAddressDTO>().ReverseMap();

        // Map TransactionDTO if necessary
        CreateMap<FeedingFrenzy.Common.TransactionDTO, FeedingFrenzy.AuthorizeNetAPI.TransactionDTO>().ReverseMap();
    }
}

